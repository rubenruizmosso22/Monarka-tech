import type { Metadata } from "next";
import { MonarkaStudioSections } from "@/components/sections/monarka-studio-sections";

export const metadata: Metadata = {
  title: "Monarka Studio — Medios 3D y Sonido",
  description:
    "Monarka Studio: audio espacial y diseño sonoro para anuncios, y el desarrollo en curso de experiencias inmersivas en 3D con Unity.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return <MonarkaStudioSections />;
}
