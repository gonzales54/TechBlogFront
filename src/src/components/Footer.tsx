import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3 className={`${poppins.className} footerTitle`}>
          Tech Itokawa Blog
        </h3>
        <div className="socialMediaBlock">
          <h4 className={`${poppins.className} socialMediaTitle`}>
            Social Media
          </h4>
          <button className={`${poppins.className} twitterBtn`}>Twitter</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
