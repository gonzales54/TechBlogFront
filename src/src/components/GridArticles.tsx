import { Klee_One, Poppins } from "next/font/google";
import Image from "next/image";
import naturePhoto from "@Image/nature.jpg";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const klee = Klee_One({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});


const GridArticles = ({posts}) => {
  const [rotateDegree, setRotateDegree] = useState<number>(0);
  const [isFetchingArticles, setFetchingArticles] = useState<boolean>(false);
  const reloadBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setFetchingArticles(true);
  }, [isFetchingArticles]);

  const rotateLoadingBtn = () => {
    setFetchingArticles(false);
    setRotateDegree((degree) => degree+=180);
    reloadBtnRef.current!.style.transform = "rotate(" + rotateDegree + "deg)";
  }

  return (
    <div className="gridArticles">
      <div className="container">
        <div className="gridArticlesHead">
          <h2 className={`${klee.className} gridArticlesTitle`}>
            最近の投稿
          </h2>
          <button className="reloadBtn" onClick={rotateLoadingBtn} ref={reloadBtnRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="iconSmall"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
        <div className="articleContainer">
          {isFetchingArticles ? posts.map((post) => {
            return (
              <article className="article" key={post.title}>
                <Link href={`/articles/${post.id}`}>
                  <div className="articleImage">
                    <Image width={0} height={0} src={naturePhoto} alt="Post Photo" />
                  </div>
                  <div className="articleInformation">
                    <h3 className={`${klee.className} articleTitle`}>{post.title}</h3>
                    <p className={`${klee.className} articleDescription`}>{post.description}</p>
                    <p className={`${poppins.className} createdAt`}>{post.createdAt}</p>
                  </div>
                </Link>
              </article>
            )
          })
          : 
          "loading..."
          }
        </div>
      </div>
    </div>
  );
};

export default GridArticles;
