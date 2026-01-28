import { SiteHeader } from "@/components/site-header";
import { CategoryGrid } from "@/components/category-grid";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />

            <div className="bg-muted/30 border-b border-border/40 py-8">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">ഹോം</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-foreground font-medium">സേവനങ്ങൾ</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        സേവന വിഭാഗങ്ങൾ
                    </h1>
                    <p className="mt-2 text-muted-foreground max-w-2xl">
                        കേരള ഡയറക്ടറി നൽകുന്ന വിവിധ സേവന വിഭാഗങ്ങൾ താഴെ നൽകിയിരിക്കുന്നു.
                    </p>
                </div>
            </div>

            <div className="py-12">
                <CategoryGrid />
            </div>

            <footer className="border-t border-border/40 bg-muted/30 py-12">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                    <p>© 2026 Kerala Directory. Open Source Public Service Initiative.</p>
                </div>
            </footer>
        </main>
    );
}
