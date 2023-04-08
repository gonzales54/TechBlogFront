import { Klee_One, Poppins } from "next/font/google";

const klee = Klee_One({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const CategoryBtn = () => {
  return (
    <div className="categoryBtn">
      <div className="container">
        <h3 className={`categoryTitle ${klee.className}`}>カテゴリー</h3>
        <ul className="categoryContainer">
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
          <li className="categoryItem">
            <button className={poppins.className}>TypeScript</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryBtn;
