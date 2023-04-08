import Head from "next/head";
import Header from "@/components/Haeder";
import Footer from "@/components/Footer";
import ArticleLinkBtn from "@/components/ArticleLinkBtn";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: '100vw',display: 'flex', flexDirection: 'column' }}>
        <Header/>
        <ArticleLinkBtn/>
        <Footer/>
      </div>
    </>
  );
}
