import { SiteHeader } from "@/components/site-header";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />

            <div className="bg-muted/30 border-b border-border/40 py-8">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">ഹോം</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-foreground font-medium">ഞങ്ങളെക്കുറിച്ച്</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        കേരള ഡയറക്ടറി
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-8 py-12">
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4">ഞങ്ങളെക്കുറിച്ച് (About Us)</h2>
                    <p className="text-muted-foreground mb-6">
                        കേരളത്തിലെ വിവിധ സർക്കാർ, സ്വകാര്യ സേവനങ്ങളും വിവരങ്ങളും ഒരിടത്ത് ലഭ്യമാക്കുന്ന ഒരു ജനകീയ സംരംഭമാണ് കേരള ഡയറക്ടറി.
                        വിദ്യാഭ്യാസം, ആരോഗ്യം, തൊഴിൽ തുടങ്ങി വൈവിധ്യമാർന്ന മേഖലകളിലെ വിവരങ്ങൾ ലളിതമായി കണ്ടെത്താൻ ഈ പോർട്ടൽ നിങ്ങളെ സഹായിക്കുന്നു.
                    </p>
                    <div className="p-6 rounded-xl border bg-card">
                        <p className="font-medium text-primary mb-2">ഈ താൾ നിർമ്മാണത്തിലാണ്.</p>
                        <p className="text-sm text-muted-foreground">കൂടുതൽ വിവരങ്ങൾ ഉടൻ ലഭ്യമാക്കും.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
