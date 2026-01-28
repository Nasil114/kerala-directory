"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, X, ChevronRight, GraduationCap, HeartPulse, Building2, Briefcase, Map, Sprout, Bus, Users, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { buildSearchIndex, searchServices, SearchableItem } from "@/lib/search";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchableItem[]>([]);
    const [index, setIndex] = useState<SearchableItem[]>([]);

    useEffect(() => {
        if (isOpen) {
            setIndex(buildSearchIndex());
            setQuery("");
            setResults([]);
        }
    }, [isOpen]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.trim()) {
                setResults(searchServices(query, index));
            } else {
                setResults([]);
            }
        }, 150);

        return () => clearTimeout(timer);
    }, [query, index]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border bg-card shadow-2xl"
                    >
                        <div className="flex items-center border-b px-4 py-3">
                            <Search className="mr-3 h-5 w-5 text-muted-foreground" />
                            <input
                                autoFocus
                                className="flex-1 bg-transparent py-2 text-lg outline-none placeholder:text-muted-foreground"
                                placeholder="സേവനങ്ങൾ, കോളേജുകൾ, സ്ഥലങ്ങൾ എന്നിവ തിരയുക..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button
                                onClick={onClose}
                                className="rounded-lg p-1 hover:bg-muted"
                            >
                                <X className="h-5 w-5 text-muted-foreground" />
                            </button>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-2 no-scrollbar">
                            {results.length > 0 ? (
                                <div className="space-y-1">
                                    <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">സേവനങ്ങൾ ({results.length})</p>
                                    {results.map((item) => {
                                        const Icon = CATEGORY_ICONS[item.categoryId] || Sparkles;
                                        return (
                                            <Link
                                                key={item.id}
                                                href={item.url}
                                                onClick={onClose}
                                                className="flex items-center gap-4 rounded-xl px-4 py-3 hover:bg-primary/5 group transition-colors"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="flex-1 overflow-hidden">
                                                    <h4 className="font-bold text-foreground truncate">{item.title}</h4>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <span>{item.category}</span>
                                                        {item.district && (
                                                            <>
                                                                <span className="h-1 w-1 rounded-full bg-border" />
                                                                <span>{item.district}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            ) : query.trim() ? (
                                <div className="py-12 text-center">
                                    <p className="text-muted-foreground truncate px-4">"{query}" എന്നതിൽ ഫലങ്ങളൊന്നും കാണുന്നില്ല</p>
                                </div>
                            ) : (
                                <div className="p-4">
                                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">ജനപ്രിയ സേവനങ്ങൾ</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { label: "മെഡിക്കൽ കോളേജുകൾ", url: "/services/education/colleges-medical" },
                                            { label: "എഞ്ചിനീയറിംഗ്", url: "/services/education/colleges-engineering" },
                                            { label: "PSC പരിശീലനം", url: "/services/education/psc-coaching" },
                                            { label: "ലൈബ്രറികൾ", url: "/services/education/public-libraries" },
                                        ].map((suggest) => (
                                            <Link
                                                key={suggest.label}
                                                href={suggest.url}
                                                onClick={onClose}
                                                className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted transition-colors"
                                            >
                                                <Sparkles className="h-4 w-4 text-primary" />
                                                <span className="text-sm font-medium">{suggest.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-between border-t bg-muted/30 px-4 py-3 text-[10px] text-muted-foreground">
                            <div className="flex gap-4">
                                <span><kbd className="rounded border bg-background px-1.5 py-0.5 font-sans shadow-sm">ESC</kbd> അടയ്ക്കുക</span>
                                <span><kbd className="rounded border bg-background px-1.5 py-0.5 font-sans shadow-sm">Enter</kbd> തിരഞ്ഞെടുക്കുക</span>
                            </div>
                            <span>Powered by Kerala Directory</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
