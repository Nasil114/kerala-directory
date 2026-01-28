import { educationData } from "@/data/education";
import { healthData } from "@/data/health";
import { jobsData } from "@/data/jobs";
import { citizenData } from "@/data/citizen";
import { tourismData } from "@/data/tourism";
import { welfareData } from "@/data/welfare";
import { agricultureData } from "@/data/agriculture";
import { transportData } from "@/data/transport";

export type SearchableItem = {
    id: string;
    title: string;
    category: string;
    categoryId: string;
    subCategoryId?: string;
    district?: string;
    description?: string;
    url: string;
};

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

/**
 * Normalizes text for search by removing extra spaces and converting to lowercase.
 */
function normalizeText(text: string): string {
    return text.toLowerCase().trim().replace(/\s+/g, ' ');
}

/**
 * Builds a searchable index from all data modules.
 */
export function buildSearchIndex(): SearchableItem[] {
    const index: SearchableItem[] = [];

    const dataSources = [
        { id: "education", name: CATEGORY_MAP.education, data: educationData },
        { id: "health", name: CATEGORY_MAP.health, data: healthData },
        { id: "jobs", name: CATEGORY_MAP.jobs, data: jobsData },
        { id: "citizen", name: CATEGORY_MAP.citizen, data: citizenData },
        { id: "tourism", name: CATEGORY_MAP.tourism, data: tourismData },
        { id: "welfare", name: CATEGORY_MAP.welfare, data: welfareData },
        { id: "agri", name: CATEGORY_MAP.agri, data: agricultureData },
        { id: "transport", name: CATEGORY_MAP.transport, data: transportData },
    ];

    dataSources.forEach((source) => {
        source.data.forEach((sub: any) => {
            // Add the sub-category itself to results (e.g., "Arts & Science Colleges")
            index.push({
                id: `${source.id}-${sub.id}`,
                title: sub.title,
                category: source.name,
                categoryId: source.id,
                subCategoryId: sub.id,
                description: sub.description,
                url: `/services/${source.id}/${sub.id}`,
            });

            // If sub-category has nested classifications (like engineering colleges)
            if (sub.classifications) {
                sub.classifications.forEach((classification: any) => {
                    classification.data.forEach((districtData: any) => {
                        districtData.items.forEach((item: any) => {
                            const title = typeof item === "string" ? item : item.label;
                            const description = typeof item === "string" ? undefined : item.description;
                            index.push({
                                id: `${source.id}-${sub.id}-${title}-${districtData.district}`,
                                title: title,
                                category: source.name,
                                categoryId: source.id,
                                subCategoryId: sub.id,
                                district: districtData.district,
                                description: description,
                                url: `/services/${source.id}/${sub.id}?type=${classification.type}`,
                            });
                        });
                    });
                });
            }

            // If sub-category has flat district data
            if (sub.data) {
                sub.data.forEach((districtData: any) => {
                    districtData.items.forEach((item: any) => {
                        const title = typeof item === "string" ? item : item.label;
                        const description = typeof item === "string" ? undefined : item.description;
                        index.push({
                            id: `${source.id}-${sub.id}-${title}-${districtData.district}`,
                            title: title,
                            category: source.name,
                            categoryId: source.id,
                            subCategoryId: sub.id,
                            district: districtData.district,
                            description: description,
                            url: `/services/${source.id}/${sub.id}`,
                        });
                    });
                });
            }
        });
    });

    return index;
}

/**
 * Performs a search against the index.
 */
export function searchServices(query: string, index: SearchableItem[]): SearchableItem[] {
    if (!query) return [];

    const normalizedQuery = normalizeText(query);
    const words = normalizedQuery.split(' ');

    return index.filter((item) => {
        const searchableText = normalizeText(`${item.title} ${item.category} ${item.district || ''} ${item.description || ''}`);

        // Match if all words in the query are found in the searchable text
        return words.every(word => searchableText.includes(word));
    }).slice(0, 15); // Limit results for performance
}
