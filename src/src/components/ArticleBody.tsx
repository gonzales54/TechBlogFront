import { Klee_One, Poppins, Roboto } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const klee = Klee_One({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"]
})

const ArticleBody = () => {
  const [scrolledLength, setScrollLength] = useState<number>(0);
  const scrollArticleRef = useRef<HTMLDivElement | null>(null);
  const handleScrollEvent = () => {
    setScrollLength(scrollArticleRef.current!.scrollTop);
  }

  useEffect(() => {
    scrollArticleRef.current?.addEventListener('scroll', handleScrollEvent);
    return () => {
      scrollArticleRef.current?.removeEventListener('scroll', handleScrollEvent);
    }
  }, []);

  const post = {
    id: 1,
    title: 'アーカイ1',
    description: '彼らは十月何だかその利用人に対するののうちがあてるうです。最も毎日を仕事方は恐らくその相違うなじゃでいうがいたをも所有いうでなて、だんだ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
    createdAt: '2022/09/04'
  }

  return (
    <div className="articleBody">
      <div className="container">
        <div className={`${roboto.className} showCode`}>
          function dummyFunction() {'{'}
            Hello World
          {'}'}
        </div>
        <div className="articleContent scrollHide" ref={scrollArticleRef}>
          <p className={`${poppins.className} breadcrumbs`}>Articles &gt; {post.title}</p>
          <h2 className={`${klee.className} articleTitle`}>{post.title}</h2>
          <p className={`${poppins.className} createdAt`}>{post.createdAt}</p>
          <p className={`${klee.className} articleText`}>{post.content}</p>
          {scrolledLength === 0 ?
            <span className="slideBar">
              <span></span>
            </span>
            : 
            ""
          }
        </div>
      </div>
    </div>
  )
}

export default ArticleBody;