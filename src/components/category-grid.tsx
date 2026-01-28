"use client";

import Link from "next/link";
import {
    GraduationCap,
    HeartPulse,
    Building2,
    Briefcase,
    Map,
    Sprout,
    Bus,
    Users
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
    {
        id: "education",
        title: "വിദ്യാഭ്യാസം",
        desc: "സ്കൂളുകൾ, കോളേജുകൾ, കോഴ്സുകൾ",
        icon: GraduationCap,
        color: "text-blue-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-100 dark:border-blue-900/30",
    },
    {
        id: "health",
        title: "ആരോഗ്യസംരക്ഷണം",
        desc: "ആശുപത്രികൾ, മരുന്ന്, സേവനങ്ങൾ",
        icon: HeartPulse,
        color: "text-red-600",
        bg: "bg-red-50 dark:bg-red-900/20",
        border: "border-red-100 dark:border-red-900/30",
    },
    {
        id: "citizen",
        title: "സർക്കാർ സേവനങ്ങൾ",
        desc: "സർട്ടിഫിക്കറ്റുകൾ, നികുതി, രേഖകൾ",
        icon: Building2,
        color: "text-orange-600",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-100 dark:border-orange-900/30",
    },
    {
        id: "jobs",
        title: "തൊഴിൽ & ബിസിനസ്",
        desc: "ജോലികൾ, ലോണുകൾ, സ്റ്റാർട്ടപ്പ്",
        icon: Briefcase,
        color: "text-purple-600",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-100 dark:border-purple-900/30",
    },
    {
        id: "tourism",
        title: "ടൂറിസം",
        desc: "സ്ഥലങ്ങൾ, യാത്രകൾ, സംസ്കാരം",
        icon: Map,
        color: "text-teal-600",
        bg: "bg-teal-50 dark:bg-teal-900/20",
        border: "border-teal-100 dark:border-teal-900/30",
    },
    {
        id: "agri",
        title: "കൃഷി",
        desc: "പദ്ധതികൾ, വിപണി, സഹായങ്ങൾ",
        icon: Sprout,
        color: "text-green-600",
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-100 dark:border-green-900/30",
    },
    {
        id: "transport",
        title: "ഗതാഗതം",
        desc: "ബസ്, ട്രെയിൻ, സമയവിവരങ്ങൾ",
        icon: Bus,
        color: "text-cyan-600",
        bg: "bg-cyan-50 dark:bg-cyan-900/20",
        border: "border-cyan-100 dark:border-cyan-900/30",
    },
    {
        id: "welfare",
        title: "സാമൂഹ്യക്ഷേമം",
        desc: "പെൻഷൻ, സഹായധനം, സ്ത്രീസുരക്ഷ",
        icon: Users,
        color: "text-pink-600",
        bg: "bg-pink-50 dark:bg-pink-900/20",
        border: "border-pink-100 dark:border-pink-900/30",
    },
];

export function CategoryGrid() {
    return (
        <section className="container mx-auto px-4 sm:px-8 pb-24">
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">സേവന വിഭാഗങ്ങൾ</h2>
                <p className="mt-2 text-muted-foreground">നിങ്ങൾക്കാവശ്യമുള്ള വിഭാഗം തിരഞ്ഞെടുക്കൂ</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((cat, index) => (
                    <Link href={`/services/${cat.id}`} key={cat.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className={`h-full group cursor-pointer rounded-2xl border p-6 transition-all hover:shadow-lg ${cat.border} bg-card hover:border-primary/20`}
                        >
                            <div className={`mb-4 inline-flex rounded-xl p-3 ${cat.bg} ${cat.color}`}>
                                <cat.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                {cat.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{cat.desc}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
