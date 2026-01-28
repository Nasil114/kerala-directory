"use client";

import Image from "next/image";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SearchModal } from "./search-modal";

export function HeroSection() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <section className="relative isolate overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 min-h-[600px] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/bg-kerala.png"
                    alt="Kerala Background"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
            </div>

            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-transparent to-transparent opacity-40 dark:from-green-900/10" />
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
            <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px]" />

            <div className="container mx-auto px-4 sm:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white px-3 py-1 text-xs font-bold text-primary shadow-[0_0_20px_rgba(255,255,255,0.8)] backdrop-blur-sm"
                    >
                        <Sparkles className="h-3 w-3" />
                        <span>All Kerala Services in One Place</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
                    >
                        കേരളത്തിനായുള്ള <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">ഡിജിറ്റൽ ജാലകം</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-10 text-lg font-bold text-foreground md:text-xl"
                    >
                        വിദ്യാഭ്യാസം, ആരോഗ്യം, തൊഴിൽ, മറ്റ് സർക്കാർ സേവനങ്ങൾ എന്നിവയെല്ലാം
                        എളുപ്പത്തിൽ കണ്ടെത്താം.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                    >
                        <div className="relative w-full max-w-md">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <Search className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <input
                                type="text"
                                readOnly
                                onClick={() => setIsSearchOpen(true)}
                                className="block w-full rounded-2xl border border-input bg-background/50 py-4 pl-12 pr-4 text-base shadow-sm backdrop-blur-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none cursor-pointer"
                                placeholder="സേവനങ്ങൾ തിരയുക..."
                            />
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="absolute right-2 top-2 bottom-2 rounded-xl bg-primary px-4 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                            >
                                തിരയുക
                            </button>
                        </div>
                        <SearchModal
                            isOpen={isSearchOpen}
                            onClose={() => setIsSearchOpen(false)}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground"
                    >
                        <span>ജനപ്രിയ സേവനങ്ങൾ:</span>
                        <button className="hover:text-primary underline decoration-dotted">K-Swift</button>
                        <button className="hover:text-primary underline decoration-dotted">Life Mission</button>
                        <button className="hover:text-primary underline decoration-dotted">PSC Thulasi</button>
                        <button className="hover:text-primary underline decoration-dotted">E-District</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
