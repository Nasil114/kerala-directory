import { educationData } from "@/data/education";
import { healthData } from "@/data/health";
import { jobsData } from "@/data/jobs";
import { citizenData } from "@/data/citizen";
import { tourismData } from "@/data/tourism";
import { welfareData } from "@/data/welfare";
import { agricultureData } from "@/data/agriculture";
import { transportData } from "@/data/transport";
import { SiteHeader } from "@/components/site-header";
import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SubServicePage({
    params,
    searchParams
}: {
    params: Promise<{ category: string; slug: string }>;
    searchParams: Promise<{ type?: string }>;
}) {

    const { category, slug } = await params;
    const { type } = await searchParams;

    // Find data
    let categoryData: any[] = [];
    switch (category) {
        case "education": categoryData = educationData; break;
        case "health": categoryData = healthData; break;
        case "jobs": categoryData = jobsData; break;
        case "citizen": categoryData = citizenData; break;
        case "tourism": categoryData = tourismData; break;
        case "welfare": categoryData = welfareData; break;
        case "agri": categoryData = agricultureData; break;
        case "transport": categoryData = transportData; break;
        default: categoryData = [];
    }

    const serviceItem = categoryData.find(item => item.id === slug);

    if (!serviceItem) {
        return notFound();
    }

    // Determine category display name
    const CATEGORY_DISPLAY: Record<string, string> = {
        education: "വിദ്യാഭ്യാസം",
        health: "ആരോഗ്യസംരക്ഷണം",
        jobs: "തൊഴിൽ & ബിസിനസ്",
        citizen: "സർക്കാർ സേവനങ്ങൾ",
        tourism: "ടൂറിസം",
        welfare: "സാമൂഹ്യക്ഷേമം",
        agri: "കൃഷി",
        transport: "ഗതാഗതം",
    };

    const categoryDisplayName = CATEGORY_DISPLAY[category] || category;

    // Handle classifications
    const hasClassifications = serviceItem.classifications && serviceItem.classifications.length > 0;
    const activeType = type || (hasClassifications ? serviceItem.classifications[0].type : null);

    const activeClassification = hasClassifications
        ? serviceItem.classifications.find((c: any) => c.type === activeType)
        : null;

    const displayData = activeClassification
        ? activeClassification.data || []
        : serviceItem.data || [];

    const pageHeading = activeClassification?.heading;

    const CLASSIFICATION_LABELS: Record<string, string> = {
        "Government": "സർക്കാർ",
        "Aided": "എയ്ഡഡ്",
        "Government Controlled": "ഗവൺമെന്റ് നിയന്ത്രിത സ്വാശ്രയം (Govt Controlled)",
        "Private": "സ്വകാര്യ സ്വാശ്രയം (Private)",
        "Self-financing": "സ്വാശ്രയം (Self-financing)",
        "Akshaya": "അക്ഷയ (Akshaya)",
        "e-District": "ഇ-ഡിസ്ട്രിക്ട് (e-District)",
        "Sevana - Civil Registration": "സേവന (Sevana)",
        "DigiLocker": "ഡിജിലോക്കർ (DigiLocker)",
        "Govt-Jobs": "സർക്കാർ ജോലികൾ (Government)",
        "Private-Jobs": "സ്വകാര്യ മേഖല (Private)",
        "Job-Fairs": "തൊഴിൽ മേളകൾ (Job Fairs)",
        "Overseas-Jobs": "വിദേശ തൊഴിൽ (Overseas)",
        "Govt-Training": "സർക്കാർ പരിശീലന കേന്ദ്രങ്ങൾ",
        "Online-Courses": "ഓൺലൈൻ കോഴ്സുകൾ"
    };

    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />

            <div className="bg-muted/30 border-b border-border/40 py-8">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">ഹോം</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href={`/services/${category}`} className="hover:text-primary">
                            {categoryDisplayName}
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-foreground font-medium">{serviceItem.title}</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {serviceItem.title}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-8 py-12">
                {hasClassifications && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {serviceItem.classifications.map((c: any) => (
                            <Link
                                key={c.type}
                                href={`/services/${category}/${slug}?type=${c.type}`}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeType === c.type
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                            >
                                {CLASSIFICATION_LABELS[c.type] || c.type}
                            </Link>
                        ))}
                    </div>
                )}

                {pageHeading && (
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">{pageHeading}</h2>
                    </div>
                )}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayData.map((districtBlock: any, idx: number) => (
                        <div key={idx} className="rounded-xl border bg-card overflow-hidden shadow-sm">
                            <div className="bg-secondary/30 px-6 py-4 border-b">
                                <div className="flex items-center gap-2 font-bold text-foreground">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    {districtBlock.district}
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {districtBlock.items.map((item: any, i: number) => (
                                        <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                                            {typeof item === 'string' ? (
                                                item
                                            ) : (
                                                <div className="flex flex-col gap-1">
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:underline font-medium inline-flex items-center gap-1 w-fit"
                                                    >
                                                        {item.label}
                                                        <span className="text-xs text-muted-foreground/50">↗</span>
                                                    </a>
                                                    {item.description && (
                                                        <span className="text-muted-foreground text-xs">
                                                            {item.description}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {displayData.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                        വിവരങ്ങൾ ലഭ്യമല്ല.
                    </div>
                )}
            </div>
        </main>
    );
}
