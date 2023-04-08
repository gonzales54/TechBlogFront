import { Klee_One, Poppins } from "next/font/google";
import Link from "next/link";

const klee = Klee_One({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <ul className="nav">
          <li className={klee.className}>
            <Link href="/">最近の投稿</Link>
          </li>
          <li className={klee.className}>
            <Link href="/">アーカイブ</Link>
          </li>
        </ul>
        <h1 className={`${poppins.className} headerTitle`}>Tech Itokawa</h1>
        <button className="searchBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
