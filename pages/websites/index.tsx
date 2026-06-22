import Head from "next/head";
import WebsiteCard from "../../composants/website";
import type { Website } from "../../types/website";
import websitesData from "../../public/next-files/websites.json";

type Props = {
  websites: Website[];
};

export function getStaticProps() {
  return {
    props: {
      websites: websitesData as Website[],
    },
  };
}

export default function Websites({ websites }: Props) {
  return (
    <>
      <Head>
        <title>Websites</title>
      </Head>
      <main>
        <h1>Websites</h1>
        <div className="website-grid">
          {websites.map((website) => (
            <WebsiteCard key={website.slug} website={website} />
          ))}
        </div>
      </main>
    </>
  );
}
