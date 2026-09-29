// Convertit les images PNG/JPG référencées dans le code en WebP compressé,
// déplace les originaux dans assets-originals/ (hors de public/, donc non déployés)
// et génère les petites images utilisées par les cartes OpenGraph (assets/og/).
//
// Usage : node scripts/optimize-images.mjs
// Le script est idempotent : il peut être relancé après l'ajout de nouvelles images.

import { readFile, writeFile, mkdir, rename, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SOURCE_FILES = [
  "data/projectsData.ts",
  "components/Hero.tsx",
  "components/Projects.tsx",
  "components/Contact.tsx",
  "components/About.tsx",
];
const MAX_WIDTH = 1920;
const QUALITY = 80;

const exists = (p) => access(p).then(() => true, () => false);

async function main() {
  const sources = {};
  for (const file of SOURCE_FILES) {
    if (await exists(join(ROOT, file))) sources[file] = await readFile(join(ROOT, file), "utf8");
  }

  const refs = new Set();
  for (const content of Object.values(sources)) {
    for (const m of content.matchAll(/["'](\/[^"']+\.(?:png|jpe?g))["']/gi)) refs.add(m[1]);
  }

  let before = 0;
  let after = 0;

  for (const ref of refs) {
    const src = join(ROOT, "public", ref);
    const original = join(ROOT, "assets-originals", ref);
    const webpRef = ref.replace(/\.(png|jpe?g)$/i, ".webp");
    const out = join(ROOT, "public", webpRef);

    const input = (await exists(src)) ? src : (await exists(original)) ? original : null;
    if (!input) {
      console.warn(`⚠️  Introuvable : ${ref}`);
      continue;
    }

    const buffer = await readFile(input);
    // La photo de profil est affichée dans un cercle (object-cover) : on la recadre en carré,
    // sinon Next choisit la taille d'après la largeur et l'image paysage manque de hauteur (flou).
    const isPortrait = ref === "/andrew.png";
    const webp = await (isPortrait
      ? sharp(buffer).resize(900, 900, { fit: "cover" }).webp({ quality: 90, effort: 6 })
      : sharp(buffer).resize({ width: MAX_WIDTH, withoutEnlargement: true }).webp({ quality: QUALITY, effort: 5 })
    ).toBuffer();
    await writeFile(out, webp);

    if (input === src) {
      await mkdir(dirname(original), { recursive: true });
      await rename(src, original);
    }

    before += buffer.length;
    after += webp.length;
    console.log(`${ref} → ${webpRef}  ${(buffer.length / 1024).toFixed(0)} Ko → ${(webp.length / 1024).toFixed(0)} Ko`);
  }

  // Remplace les extensions dans le code source
  for (const [file, content] of Object.entries(sources)) {
    let next = content;
    for (const ref of refs) {
      next = next.split(`"${ref}"`).join(`"${ref.replace(/\.(png|jpe?g)$/i, ".webp")}"`);
    }
    if (next !== content) await writeFile(join(ROOT, file), next);
  }

  // Images pour OpenGraph (satori ne lit que PNG/JPEG)
  const ogDir = join(ROOT, "assets", "og");
  await mkdir(ogDir, { recursive: true });

  const portrait = join(ROOT, "assets-originals", "andrew.png");
  if (await exists(portrait)) {
    await sharp(portrait).resize(360, 360, { fit: "cover" }).png().toFile(join(ogDir, "andrew.png"));
  }

  const data = sources["data/projectsData.ts"] ?? "";
  for (const m of data.matchAll(/slug:\s*"([^"]+)"[\s\S]*?imagebg:\s*{\s*src:\s*"([^"]+)"/g)) {
    const [, slug, cover] = m;
    const originalCover = join(ROOT, "assets-originals", cover.replace(/\.(webp|png|jpe?g)$/i, "").replace(/^\//, ""));
    const candidates = [".png", ".jpg", ".jpeg"].map((ext) => originalCover + ext);
    const found = (await Promise.all(candidates.map(exists))).findIndex(Boolean);
    if (found === -1) continue;
    await sharp(candidates[found])
      .resize(1200, 630, { fit: "cover", position: "top" })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(join(ogDir, `${slug}.jpg`));
  }

  if (before) {
    console.log(`\nTotal : ${(before / 1048576).toFixed(1)} Mo → ${(after / 1048576).toFixed(1)} Mo`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
