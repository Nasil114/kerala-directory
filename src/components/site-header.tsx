"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SearchModal } from "./search-modal";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl shadow-lg shadow-primary/20">
                        <Image
                            src="/kerala-logo.svg"
                            alt="Kerala Directory Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground leading-tight">
                            കേരള ഡയറക്ടറി
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium">
                            സേവനങ്ങളും വിഭവങ്ങളും
                        </span>
                    </div>
                </Link>

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
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    <Link
                        href="/login"
                        className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        ലോഗിൻ
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background p-6 shadow-xl md:hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-bold text-lg">Menu</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-muted-foreground hover:text-foreground"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-4 text-lg font-medium">
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors"
                                >
                                    ഹോം (Home)
                                </Link>
                                <Link
                                    href="/services"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors"
                                >
                                    സേവനങ്ങൾ (Services)
                                </Link>
                                <Link
                                    href="/about"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors"
                                >
                                    ഞങ്ങളെക്കുറിച്ച് (About)
                                </Link>
                            </nav>

                            <div className="mt-auto pt-6 border-t border-border">
                                <Link
                                    href="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex h-12 items-center justify-center rounded-xl bg-primary px-6 font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                                >
                                    ലോഗിൻ (Login)
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
