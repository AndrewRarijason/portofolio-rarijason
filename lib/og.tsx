import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Rendu partagé des images OpenGraph (aperçu LinkedIn, WhatsApp, X, Slack...).
// Les images sources sont préparées par scripts/optimize-images.mjs dans assets/og/.

export const ogSize = { width: 1200, height: 630 };

const COLORS = {
  bg: "#0f172a",
  text: "#f8fafc",
  muted: "#94a3b8",
  cyan: "#22d3ee",
  blue: "#3b82f6",
};

async function asDataUrl(file: string, mime: string) {
  try {
    const data = await readFile(join(process.cwd(), "assets", "og", file), "base64");
    return `data:${mime};base64,${data}`;
  } catch {
    return null;
  }
}

function Background() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex" }}>
      <div
        style={{
          position: "absolute",
          top: -200,
          left: -150,
          width: 700,
          height: 700,
          borderRadius: 9999,
          background: "radial-gradient(circle, rgba(6,182,212,0.28), rgba(6,182,212,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -250,
          right: -150,
          width: 800,
          height: 800,
          borderRadius: 9999,
          background: "radial-gradient(circle, rgba(59,130,246,0.25), rgba(59,130,246,0) 70%)",
        }}
      />
    </div>
  );
}

export async function renderProfileOg({ role, availability }: { role: string; availability: string }) {
  const portrait = await asDataUrl("andrew.png", "image/png");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: COLORS.bg, position: "relative", fontFamily: "sans-serif" }}>
        <Background />
        <div style={{ display: "flex", alignItems: "center", gap: 64, padding: "0 90px", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                alignSelf: "flex-start",
                padding: "10px 22px",
                borderRadius: 9999,
                border: "2px solid rgba(16,185,129,0.5)",
                background: "rgba(16,185,129,0.12)",
                color: "#6ee7b7",
                fontSize: 24,
              }}
            >
              <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#10b981" }} />
              {availability}
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, color: COLORS.text, lineHeight: 1.05 }}>
              <span>Aiky Andrew</span>
              <span style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.cyan}, #2dd4bf, ${COLORS.blue})`, backgroundClip: "text", color: "transparent" }}>
                RARIJASON
              </span>
            </div>
            <div style={{ display: "flex", fontSize: 38, color: COLORS.muted }}>{role}</div>
            <div style={{ display: "flex", fontSize: 26, color: COLORS.cyan, marginTop: 12 }}>andrew-rarijason.vercel.app</div>
          </div>
          {portrait && (
            <div
              style={{
                display: "flex",
                padding: 8,
                borderRadius: 9999,
                backgroundImage: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.blue})`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={portrait} width={340} height={340} alt="" style={{ borderRadius: 9999, objectFit: "cover" }} />
            </div>
          )}
        </div>
      </div>
    ),
    ogSize
  );
}

export async function renderProjectOg({
  slug,
  title,
  stack,
  label,
}: {
  slug: string;
  title: string;
  stack: string[];
  label: string;
}) {
  const cover = await asDataUrl(`${slug}.jpg`, "image/jpeg");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: COLORS.bg, position: "relative", fontFamily: "sans-serif" }}>
        {cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover} width={1200} height={630} alt="" style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", opacity: 0.45 }} />
        )}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundImage: "linear-gradient(100deg, rgba(15,23,42,0.96) 40%, rgba(15,23,42,0.6) 100%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 28, padding: "0 90px", width: "100%", position: "relative" }}>
          <div style={{ display: "flex", fontSize: 26, color: COLORS.cyan, letterSpacing: 4, textTransform: "uppercase" }}>{label}</div>
          <div style={{ display: "flex", fontSize: title.length > 45 ? 58 : 70, fontWeight: 800, color: COLORS.text, lineHeight: 1.1, maxWidth: 950 }}>
            {title}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, maxWidth: 950 }}>
            {stack.slice(0, 6).map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 10,
                  fontSize: 24,
                  color: "#a5f3fc",
                  background: "rgba(6,182,212,0.15)",
                  border: "2px solid rgba(6,182,212,0.35)",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: COLORS.muted, marginTop: 8 }}>andrew-rarijason.vercel.app</div>
        </div>
      </div>
    ),
    ogSize
  );
}
