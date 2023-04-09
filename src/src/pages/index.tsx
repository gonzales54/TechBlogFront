import Head from "next/head";
import CategoryBtn from "@/components/CategoryBtn";
import Footer from "@/components/Footer";
import GridArticles from "@/components/GridArticles";
import Header from "@/components/Header";
import ArticleBody from "@/components/ArticleBody";
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
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <GridArticles/>
        <ArticleBody/>
        <ArticleLinkBtn/>
      </div>
    </>
  );
}
