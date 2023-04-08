import { Klee_One } from "next/font/google";
import Link from "next/link";

const klee = Klee_One({
  weight: "400",
  subsets: ["latin"],
});

const ArticleLinkBtn = () => {
  return (
    <div className="articleLinkBtn">
      <div className="container">
        <Link href="/" className="articleLink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="iconChevron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p className={klee.className}>
            日本国民は、正当に選挙された国会における代表者を通じて行動し
          </p>
        </Link>
        <hr className="linkBorderLine" />
        <Link href="/" className="articleLink">
          <p className={klee.className}>
            日本国民は、正当に選挙された国会における代表者を通じて行動し
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="iconChevron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleLinkBtn;
