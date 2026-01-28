"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SearchModal } from "./search-modal";

export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent-dark text-white shadow-lg shadow-primary/20">
                        <span className="text-xl font-bold">K</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground leading-tight">
                            കേരള ഡയറക്ടറി
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium">
                            സേവനങ്ങളും വിഭവങ്ങളും
                        </span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">
                        ഹോം
                    </Link>
                    <Link href="/services" className="hover:text-primary transition-colors">
                        സേവനങ്ങൾ
                    </Link>
                    <Link href="/about" className="hover:text-primary transition-colors">
                        ഞങ്ങളെക്കുറിച്ച്
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="hidden md:flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                        <Search className="h-4 w-4" />
                        <span>തിരയുക/Search...</span>
                    </button>

                    <SearchModal
                        isOpen={isSearchOpen}
                        onClose={() => setIsSearchOpen(false)}
                    />

                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    <Link
                        href="/login"
                        className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        ലോഗിൻ
                    </Link>
                </div>
            </div>
        </header>
    );
}
