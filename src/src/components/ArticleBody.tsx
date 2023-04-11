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
  //const [scrolledLength, setScrollLength] = useState<number>(0);
  const scrolledLength = useRef<number>(0);
  const scrollArticleRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  const handleScrollEvent = (e: React.UIEvent<HTMLDivElement>) => {
    scrolledLength.current = scrollArticleRef.current!.scrollTop;
    for(let i = 0; i < scrollArticleRef.current!.querySelectorAll('.h1').length; i++) {
      const item = scrollArticleRef.current!.querySelectorAll('.h1')[i].getBoundingClientRect();
      const targetCode = codeRef.current!.querySelectorAll('.codes')[i] as Element;
      if(!targetCode) return;

      if(item.top < 180 && item.top > 0) {
        if(!targetCode.classList.contains('hide')) {
          targetCode.classList.add('hide');
        }
      }
      if(item.top > 180 && item.top < 960) {
        if(targetCode.classList.contains('hide')) {
          targetCode.classList.remove('hide');
        }
      }
      if(item.top > 960) {
        if(!targetCode.classList.contains('hide')) {
          targetCode.classList.add('hide');
        }
      }
    }
  }

  const post = {
    id: 1,
    title: 'アーカイ1',
    description: '彼らは十月何だかその利用人に対するののうちがあてるうです。最も毎日を仕事方は恐らくその相違うなじゃでいうがいたをも所有いうでなて、だんだ',
    content: `# Markdown1
  ## Markdown2

  ~~~js
  function getHello World() {
    console.log('Good Morning Hello World')
  }
  ~~~

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown2
  ## Markdown2

  ~~~js
  function getHello World() {
    console.log('Good Morning Hello World')
  }
  ~~~

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown3
  ## Markdown2
  ~~~js
  function calculate(a, b) {
    return a + b
  }
  ~~~
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown4
  ## Markdown2
  ~~~js
  function calculate(a, b) {
    return a + b
  }
  ~~~

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown5
  ## Markdown2
  ~~~js
  function calculate(a, b) {
    return a + b
  }
  ~~~

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown6
  ## Markdown2
  ~~~js
  function calculate(a, b) {
    return a + b
  }
  ~~~
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown7
  ## Markdown2
  ~~~js
  function calculate(a, b) {
    return a + b
  }
  ~~~

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
  # Markdown8
  ## Markdown2
  ~~~js
  function calculate(a, b) {
    return a + b
  }
  ~~~

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
        <div className={`${roboto.className} showCode`} ref={codeRef}>
          {matches!.map((code, index: number) => {
            return (
              <ReactMarkdown
                components={{ 
                  pre: ({node, ...props}) => <pre className={`codes ${index > 2 ? "hide" : ""}`} {...props} ></pre>
                 }}
                key={index}
                >{code}</ReactMarkdown>
            )
          })}
        </div>
        <div className="articleContent scrollHide" onScroll={handleScrollEvent} ref={scrollArticleRef}>
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
          {scrolledLength.current === 0 ?
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