import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/effects/magnetic-button";

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <MagneticButton
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-4 rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${
        light
          ? "border-white/25 text-white hover:bg-white hover:text-black"
          : "border-black/20 text-black hover:bg-black hover:text-white"
      }`}
    >
      {children}
      <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:rotate-45" />
      {external && <span className="sr-only">(abre en una nueva ventana)</span>}
    </MagneticButton>
  );
}
