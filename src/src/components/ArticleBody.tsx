import { Klee_One, Poppins, Roboto } from "next/font/google";

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
  return (
    <div className="articleBody">
      <div className="container">
        <div className={`${roboto.className} showCode`}>
          function dummyFunction() {'{'}
            Hello World
          {'}'}
        </div>
        <div className="articleContent">
          <p className={`${poppins.className} breadcrumbs`}>Articles &gt; title</p>
          <h2 className={`${klee.className} articleTitle`}>Lorem ipsum dolor sitaaaa amet, consectetur adipiscing</h2>
          <p className={`${poppins.className} createdAt`}>2022/09/05</p>
          <p className={`${klee.className} articleText`}>
            At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus erum hic 
          </p>
          <span className="slideBar">
            <span></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ArticleBody;