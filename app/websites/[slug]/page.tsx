import WebsiteHeader from "@/composants/ui/WebsiteHeader";
import { WebsiteType } from "@/types/website";
import { redirect } from "next/navigation";

// export async function getStaticPaths() {
//   const websites = await fetch("http://localhost:3000/websites.json").then(
//     (res) => res.json(),
//   );
//   const paths = websites.map((w: WebsiteType) => ({
//     params: { slug: w.slug },
//   }));
//   return { paths, fallback: true };
// }

type WebsitePageType = {
  params: Promise<{ slug: string }>;
};

export default async function WebsitePage({ params }: WebsitePageType) {
  const { slug } = await params;
  const websites: WebsiteType[] = await fetch(
    "http://localhost:3000/websites.json",
  ).then((res) => res.json());
  const currentWebsite = websites.find((w: WebsiteType) => w.slug == slug);
  if (!currentWebsite) redirect("/websites");

  return (
    <main>{currentWebsite && <WebsiteHeader website={currentWebsite} />}</main>
  );
}
