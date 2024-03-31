import Head from "next/head";
import Faqs from "~/components/Faqs";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Section1 from "~/components/Section1";

export default function Home() {
  return (
    <>
      <Head>
        <title>Violet Tours</title>
        <meta
          name="description"
          content="Explore the City with NYU's Finest Tour Guides!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Section1 />
        <Faqs />
      </main>
    </>
  );
}
