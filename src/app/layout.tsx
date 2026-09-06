import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import "./globals.css";

export const metadata: Metadata = { title: "Pachakuna", description: "Tradición peruana que viste." };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const assetVariables = { "--texture-hilo": `url("${assetPrefix}/set-fotos/textura-hilo.png")` } as CSSProperties;

  return <html lang="es" style={assetVariables}><body>{children}</body></html>;
}
