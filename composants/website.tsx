import Image from "next/image";
import type { Website } from "../types/website";

type Props = {
  website: Website;
};

export default function Website({ website }: Props) {
  return (
    <article className="website-card">
      <h2>{website.title}</h2>
      <Image
        src={`/next-files/websites/${website.thumbnail}`}
        alt={`Visuel de ${website.title}`}
        width={800}
        height={600}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </article>
  );
}
