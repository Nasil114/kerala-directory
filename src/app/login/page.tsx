import { SiteHeader } from "@/components/site-header";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />

            <div className="container mx-auto px-4 py-24 flex items-center justify-center">
                <div className="w-full max-w-md p-8 rounded-2xl border bg-card shadow-lg">
                    <div className="text-center mb-8">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white mb-4">
                            <span className="text-2xl font-bold">K</span>
                        </div>
                        <h1 className="text-2xl font-bold">ലോഗിൻ</h1>
                        <p className="text-sm text-muted-foreground mt-2">
                            കേരള ഡയറക്ടറിയിലേക്ക് സ്വാഗതം
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted/50 border text-center">
                            <p className="text-sm font-medium">ലോഗിൻ സൗകര്യം ഉടൻ ലഭ്യമാകും.</p>
                            <p className="text-xs text-muted-foreground mt-1">Migration in progress...</p>
                        </div>

                        <Link
                            href="/"
                            className="flex w-full h-10 items-center justify-center rounded-lg bg-primary text-white text-sm font-medium"
                        >
                            തിരികെ ഹോം പേജിലേക്ക്
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
