"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { buildSearchIndex, searchServices, SearchableItem } from "@/lib/search";
import { ChevronRight, Sparkles, GraduationCap, HeartPulse, Building2, Briefcase, Map, Sprout, Bus, Users } from "lucide-react";
import Link from "next/link";

const CATEGORY_ICONS: Record<string, any> = {
    education: GraduationCap,
    health: HeartPulse,
    citizen: Building2,
    jobs: Briefcase,
    tourism: Map,
    agri: Sprout,
    transport: Bus,
    welfare: Users,
};

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [results, setResults] = useState<SearchableItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const index = buildSearchIndex();
        const found = searchServices(query, index);
        setResults(found);
        setIsLoading(false);
    }, [query]);

    return (
        <div className="container mx-auto px-4 sm:px-8 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">തിരയൽ ഫലങ്ങൾ</h1>
                <p className="text-muted-foreground">
                    {query ? `"${query}" എന്നതിനായി ${results.length} ഫലങ്ങൾ ലഭിച്ചു.` : "തിരയാൻ ആഗ്രഹിക്കുന്നത് ടൈപ്പ് ചെയ്യുക."}
                </p>
            </div>

            {isLoading ? (
                <div className="py-12 text-center text-muted-foreground text-sm">ഫലങ്ങൾ തിരയുന്നു...</div>
            ) : results.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {results.map((item) => {
                        const Icon = CATEGORY_ICONS[item.categoryId] || Sparkles;
                        return (
                            <Link
                                key={item.id}
                                href={item.url}
                                className="group rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:border-primary/20"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary transition-colors group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
                                        <p className="text-xs text-muted-foreground">{item.category}</p>
                                    </div>
                                </div>

                                {item.description && (
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
                                        {item.description}
                                    </p>
                                )}

                                <div className="flex items-center justify-between mt-auto pt-4 border-t text-sm font-medium text-primary">
                                    <span>{item.district || "വിവരങ്ങൾ കാണുക"}</span>
                                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="py-12 border rounded-2xl bg-muted/30 text-center">
                    <p className="text-muted-foreground">ക്ഷമിക്കണം, ഫലങ്ങളൊന്നും കാണുന്നില്ല.</p>
                    <Link href="/" className="text-primary font-medium hover:underline mt-4 inline-block">തിരികെ ഹോം പേജിലേക്ക്</Link>
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <Suspense fallback={<div className="container mx-auto px-8 py-12">ലോഡ് ചെയ്യുന്നു...</div>}>
                <SearchResults />
            </Suspense>
        </main>
    );
}
