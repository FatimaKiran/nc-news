import React from "react";
import { useParams } from "react-router-dom";
import { getArticle, patchArticles } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Style from "../Article.module.css";
const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [vote, setVote] = useState(0);

  useEffect(() => {
    getArticle(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

  function addTheVote() {
    patchArticles(article_id);
    setVote((count) => count + 1);
  }

  return (
    <div className={Style.main}>
      <div className={Style.div}>
        <ul>
          <li className={Style.li}>
            {" "}
            <h2>{article.topic}</h2>
          </li>
          <br />
          <li className={Style.li}>{article.title}</li>
          <br />
          <li className={Style.li}>{article.body}</li> <br />
          <li className={Style.li}>Written by: {article.author}</li>
          <li className={Style.li}>Created at: {article.created_at}</li> <br />
          <Link
            className={Style.link}
            key={article.article_id}
            to={`/articles/${article.article_id}/comments`}
          >
            View All comments
            <br />
          </Link>
          <button onClick={addTheVote}> 👍{vote + article.votes}</button>
        </ul>
      </div>
    </div>
  );
};

export default Article;
