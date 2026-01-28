"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const COLLEGE_TYPES = [
    { label: "ആർട്സ് & സയൻസ്", value: "arts" },
    { label: "എഞ്ചിനീയറിംഗ്", value: "engineering" },
    { label: "മെഡിക്കൽ", value: "medical" },
    { label: "പോളിടെക്നിക്", value: "poly" },
];

export function CollegeTabs() {
    const searchParams = useSearchParams();
    const currentTab = searchParams.get("tab");

    // Only show these filtering tabs if we are in the "colleges" section
    if (currentTab !== "colleges" && currentTab !== null) {
        // Note: currentTab !== null depends on default behavior. 
        // If default is colleges, we should show it.
        // Actually, CategoryPage handles filtering. 
        // If tab is 'colleges' OR undefined (default), we show this secondary filter?
        // Let's rely on parent to render this conditionally.
        return null;
    }

    const currentType = searchParams.get("type") || "arts";

    return (
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-6">
            {COLLEGE_TYPES.map((type) => {
                const isActive = currentType === type.value;
                return (
                    <Link
                        key={type.value}
                        href={`/services/education?tab=colleges&type=${type.value}`}
                        scroll={false}
                        className={cn(
                            "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                            isActive
                                ? "bg-green-700 text-white shadow-md" // Dark Green as per screenshot
                                : "bg-white text-gray-600 border border-gray-200 hover:border-green-600/50 hover:text-green-700"
                        )}
                    >
                        {type.label}
                    </Link>
                );
            })}
        </div>
    );
}
