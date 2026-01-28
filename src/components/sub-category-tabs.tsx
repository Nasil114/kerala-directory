"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type TabItem = {
    label: string;
    value: string;
};

// Tabs configuration for each category
const CATEGORY_TABS: Record<string, TabItem[]> = {
    education: [
        { label: "ഗവൺമെന്റ് വിദ്യാഭ്യാസ പദ്ധതികൾ", value: "schemes" },
        { label: "കോളേജുകൾ & സർവ്വകലാശാലകൾ", value: "colleges" },
        { label: "മത്സരപരീക്ഷാ പരിശീലനം", value: "coaching" },
        { label: "ലൈബ്രറികൾ", value: "libraries" },
    ],
    jobs: [
        { label: "സർക്കാർ ജോലികൾ", value: "govt-jobs" },
        { label: "സ്വകാര്യ മേഖല", value: "private-jobs" },
        { label: "ജോബ് ഫെയേഴ്സ്", value: "job-fairs" },
        { label: "വിദേശ തൊഴിൽ", value: "overseas-jobs" },
        { label: "സ്കിൽ ഡെവലപ്‌മെന്റ്", value: "govt-training" },
        { label: "ഓൺലൈൻ കോഴ്സുകൾ", value: "online-courses" },
        { label: "ഭാഷാ പരിശീലനം", value: "language-training" },
        { label: "സംരംഭകത്വം", value: "entrepreneurship" },
    ],
    tourism: [
        { label: "മലയോരം പ്രകൃതിയും", value: "hill-stations" },
        { label: "കടൽതീരങ്ങൾ", value: "beaches" },
        { label: "കായൽ ടൂറിസം", value: "backwaters" },
        { label: "പൈതൃകം & തീർത്ഥാടനം", value: "heritage-pilgrimage" },
        { label: "ആധുനിക ടൂറിസം", value: "modern-tourism" },
    ],
    agri: [
        { label: "കൃഷി പദ്ധതികൾ", value: "schemes" },
        { label: "വിപണനം & വിൽപ്പന", value: "marketing" },
        { label: "സേവനങ്ങൾ", value: "services" },
        { label: "പരിശീലനം", value: "training" },
    ],
};

export function SubCategoryTabs({ category }: { category: string }) {
    const searchParams = useSearchParams();
    const currentTab = searchParams.get("tab") || "colleges"; // Default to colleges for education as per screenshot

    const tabs = CATEGORY_TABS[category];

    if (!tabs) return null;

    return (
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-8">
            {tabs.map((tab) => {
                const isActive = currentTab === tab.value;
                return (
                    <Link
                        key={tab.value}
                        href={`/services/${category}?tab=${tab.value}`}
                        className={cn(
                            "px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                            isActive
                                ? "bg-[#FCD364] text-black border-[#FCD364] font-bold shadow-sm" // Active: Yellow/Gold like screenshot
                                : "bg-white text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                        )}
                    >
                        {tab.label}
                    </Link>
                );
            })}
        </div>
    );
}
