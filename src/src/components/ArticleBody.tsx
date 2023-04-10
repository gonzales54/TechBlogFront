import { Klee_One, Poppins, Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { Children, useEffect, useRef, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
    scrollArticleRef.current!.addEventListener('scroll', handleScrollEvent);
    return () => {
      scrollArticleRef.current!.removeEventListener('scroll', handleScrollEvent);
    }
  }, []);

  const post = {
    id: 1,
    title: 'アーカイ1',
    description: '彼らは十月何だかその利用人に対するののうちがあてるうです。最も毎日を仕事方は恐らくその相違うなじゃでいうがいたをも所有いうでなて、だんだ',
    content: `# Markdown  
  ## Markdown2

  ~~~js
  function getHello World() {
    console.log('Good Morning Hello World')
  }
  ~~~

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown  
  ## Markdown2

  ~~~js
  function getHello World() {
    console.log('Good Morning Hello World')
  }
  ~~~

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown  
  ## Markdown2

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown  
  ## Markdown2
  ~~~js
  function calculate(a, b) {
    return a + b
  }
  ~~~

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown  
  ## Markdown2

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown  
  ## Markdown2

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown  
  ## Markdown2

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown  
  ## Markdown2

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown  
  ## Markdown2

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  `,
    createdAt: '2022/09/04'
  }

  const regex = /~~~[\s\S]*?~~~/g;
  const matches = post.content.match(regex);

  const router = useRouter();
  if(!router.isReady) return;

  return (
    <div className="articleBody">
      <div className="container">
        <div className={`${roboto.className} showCode`}>
          {matches!.map((code, index: number) => {
            return (
              <ReactMarkdown key={index}>{code}</ReactMarkdown>
            )
          })}
        </div>
        <div className="articleContent scrollHide" ref={scrollArticleRef}>
          <p className={`${poppins.className} breadcrumbs`}>Articles &gt; {post.title}</p>
          <h2 className={`${klee.className} articleTitle`}>{post.title}</h2>
          <p className={`${poppins.className} createdAt`}>{post.createdAt}</p>
          <div className="markdown">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <div className="h1" {...props}></div>,
                h2: ({node, ...props}) => <div className="h2" {...props}></div>,
                h3: ({node, ...props}) => <div className="h3" {...props}></div>,
                p: ({node, ...props}) => <p className="paragraph" {...props}></p>,
                pre: ({node, ...props}) => <></>
              }}
              >{post.content}
            </ReactMarkdown>
          </div>
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