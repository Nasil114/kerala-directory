"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
    {
        title: "Munnar Tea Gardens",
        desc: "Rolling hills and mist-covered plantations.",
        src: "/kerala-munnar.png",
        cols: "md:col-span-2 md:row-span-2"
    },
    {
        title: "Alleppey Backwaters",
        desc: "Peaceful houseboat journeys at sunset.",
        src: "/kerala-houseboat.png",
        cols: "md:col-span-2 md:row-span-1"
    },
    {
        title: "Cultural Heritage",
        desc: "The expressive art of Kathakali.",
        src: "/kerala-kathakali.png",
        cols: "md:col-span-2 md:row-span-1"
    }
];

export function KeralaShowcase() {
    return (
        <section className="container mx-auto px-4 sm:px-8 pb-32">
            <div className="mb-12 flex flex-col items-center text-center">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Immerse Yourself</span>
                <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Experience Kerala</h2>
                <div className="mt-2 h-1 w-20 bg-primary/30 rounded-full" />
                <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                    Discover the breathtaking beauty and rich culture of God&apos;s Own Country.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-card/50 shadow-xl ${item.cols}`}
                    >
                        <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                            <h3 className="font-heading text-xl font-bold text-white mb-1">
                                {item.title}
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
