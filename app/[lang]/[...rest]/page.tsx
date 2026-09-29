import { notFound } from "next/navigation";

// Toute URL inconnue sous /en ou /fr affiche la page 404 localisée
export default function CatchAll() {
  notFound();
}
