import { educationData } from "@/data/education";
import { healthData } from "@/data/health";
import { jobsData } from "@/data/jobs";
import { citizenData } from "@/data/citizen";
import { tourismData } from "@/data/tourism";
import { welfareData } from "@/data/welfare";
import { agricultureData } from "@/data/agriculture";
import { transportData } from "@/data/transport";
import { SiteHeader } from "@/components/site-header";
import { SubCategoryTabs } from "@/components/sub-category-tabs";
import { CollegeTabs } from "@/components/college-tabs";
import { HealthTabs } from "@/components/health-tabs";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const CATEGORY_MAP: Record<string, string> = {
    education: "വിദ്യാഭ്യാസം",
    health: "ആരോഗ്യസംരക്ഷണം",
    jobs: "തൊഴിൽ & ബിസിനസ്",
    citizen: "സർക്കാർ സേവനങ്ങൾ",
    tourism: "ടൂറിസം",
    welfare: "സാമൂഹ്യക്ഷേമം",
    agri: "കൃഷി",
    transport: "ഗതാഗതം",
};

export default async function CategoryPage({
    params,
    searchParams
}: {
    params: Promise<{ category: string }>;
    searchParams: Promise<{ tab?: string; type?: string }>;
}) {
    const { category } = await params;
    const { tab, type } = await searchParams;
    const categoryName = CATEGORY_MAP[category];

    if (!categoryName) {
        return notFound();
    }

    // Determine data source based on category
    let subCategories: any[] = [];
    switch (category) {
        case "education": subCategories = educationData; break;
        case "health": subCategories = healthData; break;
        case "jobs": subCategories = jobsData; break;
        case "citizen": subCategories = citizenData; break;
        case "tourism": subCategories = tourismData; break;
        case "welfare": subCategories = welfareData; break;
        case "agri": subCategories = agricultureData; break;
        case "transport": subCategories = transportData; break;
        default: subCategories = [];
    }

    if (subCategories.length === 0) {
        return (
            <main className="min-h-screen bg-background">
                <SiteHeader />
                <div className="container mx-auto px-4 py-12 text-center">
                    <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
                    <p className="text-muted-foreground">The {category} section is currently being migrated.</p>
                </div>
            </main>
        )
    }

    // Filter subCategories based on active tab for Education
    let filteredItems = subCategories;
    if (category === "education") {
        const activeTab = tab || "colleges"; // Default active tab
        const activeType = type || "arts";   // Default college type

        if (activeTab === "schemes") {
            filteredItems = subCategories.filter(item => item.id === "scholarships");
        } else if (activeTab === "colleges") {
            // Filter based on activeType
            if (activeType === "arts") {
                filteredItems = subCategories.filter(item => item.id === "colleges-arts");
            } else if (activeType === "engineering") {
                filteredItems = subCategories.filter(item => item.id === "colleges-engineering");
            } else if (activeType === "medical") {
                filteredItems = subCategories.filter(item => item.id === "colleges-medical");
            } else if (activeType === "poly") {
                filteredItems = subCategories.filter(item => item.id === "colleges-poly");
            }
        } else if (activeTab === "coaching") {
            filteredItems = subCategories.filter(item =>
                ["ias-coaching", "psc-coaching", "entrance-coaching", "bank-coaching"].includes(item.id)
            );
        } else if (activeTab === "libraries") {
            filteredItems = subCategories.filter(item => ["public-libraries", "digital-libraries"].includes(item.id));
        }
    }

    // Filter subCategories based on active tab for Health
    if (category === "health") {
        const activeTab = tab || "govt-facilities"; // Default active tab

        if (activeTab === "govt-facilities") {
            filteredItems = subCategories.filter(item =>
                ["medical-colleges", "hospitals", "wc-hospitals", "spec-centers", "ayurveda", "homeo"].includes(item.id)
            );
        } else if (activeTab === "schemes") {
            filteredItems = subCategories.filter(item => item.id === "health-schemes");
        } else if (activeTab === "emergency") {
            filteredItems = subCategories.filter(item =>
                ["emergency-services", "blood-banks", "deaddiction"].includes(item.id)
            );
        } else if (activeTab === "fitness") {
            filteredItems = subCategories.filter(item =>
                ["fitness-yoga", "welfare-programs"].includes(item.id)
            );
        }
    }

    // Filter subCategories based on active tab for Jobs
    if (category === "jobs") {
        const activeTab = tab || "govt-jobs"; // Default active tab
        filteredItems = subCategories.filter(item => item.id === activeTab);
    }

    // Filter subCategories based on active tab for Tourism
    if (category === "tourism") {
        const activeTab = tab || "hill-stations"; // Default active tab
        filteredItems = subCategories.filter(item => item.id === activeTab);
    }

    // Filter subCategories based on active tab for Agriculture
    if (category === "agri") {
        const activeTab = tab || "schemes"; // Default active tab
        filteredItems = subCategories.filter(item => item.id === activeTab);
    }

    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />

            <div className="bg-muted/30 border-b border-border/40 py-8">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">ഹോം</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-foreground font-medium">{categoryName}</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {categoryName}
                    </h1>
                    <p className="mt-2 text-muted-foreground max-w-2xl">
                        {categoryName}-വുമായി ബന്ധപ്പെട്ട സേവനങ്ങളും വിവരങ്ങളും താഴെ നൽകിയിരിക്കുന്നു.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-8 py-12">
                {/* Render Tabs for Education, Jobs, Tourism, and Agriculture */}
                {(category === "education" || category === "jobs" || category === "tourism" || category === "agri") && (
                    <>
                        <SubCategoryTabs category={category} />
                        {/* Render College Sub-Tabs only if Colleges tab is active */}
                        {(category === "education" && (!tab || tab === "colleges")) && (
                            <CollegeTabs />
                        )}
                    </>
                )}

                {/* Render Tabs for Health */}
                {category === "health" && (
                    <HealthTabs />
                )}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((sub: any) => (
                        <Link
                            href={`/services/${category}/${sub.id}`}
                            key={sub.id}
                            className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                        >
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {sub.title}
                            </h3>
                            {sub.description && (
                                <p className="text-muted-foreground text-sm mb-4">
                                    {sub.description}
                                </p>
                            )}
                            <div className="flex items-center text-sm font-medium text-primary">
                                കൂടുതൽ വിവരങ്ങൾ <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                        No items found in this section.
                    </div>
                )}
            </div>
        </main>
    );
}
