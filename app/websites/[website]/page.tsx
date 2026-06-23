import { redirect } from "next/navigation";
import WebsiteHeader from "@/composants/ui/WebsiteHeader";
import { WebsiteType } from "@/types/website";

export async function generateStaticParams() {
    const websites: WebsiteType[] = await fetch("http://localhost:3000/websites.json").then(
        (res) => res.json(),
    );
    return websites.map((w) => ({ website: w.slug }));
}

export default async function WebsitePage({ params }: { params: { website: string } }) {
    const websites: WebsiteType[] = await fetch("http://localhost:3000/websites.json").then(
        (res) => res.json(),
    );

    const currentWebsite = websites.find((w) => w.slug === params.website);
    if (!currentWebsite) redirect("/websites");

    return (
        <main>
            <WebsiteHeader website={currentWebsite} />
        </main>
    );
}
