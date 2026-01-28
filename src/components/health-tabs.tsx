"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const HEALTH_TABS = [
    { id: "govt-facilities", label: "സർക്കാർ ആരോഗ്യ സംവിധാനങ്ങൾ" },
    { id: "schemes", label: "ഇൻഷുറൻസ് & സഹായ പദ്ധതികൾ" },
    { id: "emergency", label: "അടിയന്തര സേവനങ്ങൾ" },
    { id: "fitness", label: "ഫിറ്റ്നസ് & യോഗ" },
];

export function HealthTabs() {
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab") || "govt-facilities";

    return (
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-8">
            {HEALTH_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                    <Link
                        key={tab.id}
                        href={`/services/health?tab=${tab.id}`}
                        className={cn(
                            "px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                            isActive
                                ? "bg-[#FCD364] text-black border-[#FCD364] font-bold shadow-sm"
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
