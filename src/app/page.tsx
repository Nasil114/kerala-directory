import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { CategoryGrid } from "@/components/category-grid";
import { KeralaShowcase } from "@/components/kerala-showcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <CategoryGrid />
      <KeralaShowcase />

      <footer className="border-t border-border/40 bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Kerala Directory. Open Source Public Service Initiative.</p>
        </div>
      </footer>
    </main>
  );
}
