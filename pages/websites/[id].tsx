import Head from "next/head";

export default function Website({ id }: { id: string }) {
  return (
    <>
      <Head>
        <title>{id}</title>

      </Head>
    </>
  );
}
