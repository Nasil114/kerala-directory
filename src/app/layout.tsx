import type { Metadata } from "next";
import { Inter, Manjari } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manjari = Manjari({
  variable: "--font-manjari",
  subsets: ["malayalam"],
  weight: ["100", "400", "700"],
});

export const metadata: Metadata = {
  title: "പൊതു സേവന പോർട്ടൽ | Kerala Directory",
  description: "All Kerala government services and information in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ml">
      <body
        className={cn(
          inter.variable,
          manjari.variable,
          "antialiased font-sans bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
