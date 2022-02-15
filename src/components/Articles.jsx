import React from "react";
import { useEffect, useState } from "react";
import { getArticles, getArticlesTopic } from "../api";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { getArticlesQuery } from "../api";
import Style from "../Articles.module.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("All");

  useEffect(() => {
    if (topic === "All") {
      getArticles(query).then((res) => {
        setArticles(res);
        setIsLoading(false);
      });
    } else if (
      topic === "cooking" ||
      topic === "coding" ||
      topic === "football"
    ) {
      getArticlesTopic(topic, query).then((res) => {
        setArticles(res);
        setIsLoading(false);
      });
    }
  }, [topic, query]);

  function handleChange(event) {
    setTopic(event.target.value);
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  return isLoading ? (
    <p> 🌐LOADING....🌐 </p>
  ) : (
    <div className={Style.div}>
      <form className={Style.form}>
        <label htmlFor="topics">Choose a Topic:</label>
        <select name="topics" id="topics" onChange={handleChange}>
          <option value="All">All</option>
          <option value="cooking">Cooking</option>
          <option value="football">football</option>
          <option value="coding">Coding</option>
        </select>
      </form>
      <br />

      <form className={Style.form}>
        <label htmlFor="queries">Sorted By:</label>
        <select name="queries" id="queries" onChange={handleQuery}>
          <option className={Style.form} value="All">
            All
          </option>
          <option className={Style.form} value="created_at">
            Date
          </option>
          <option className={Style.form} value="comment_count">
            Comment Count
          </option>
          <option className={Style.form} value="votes">
            Votes
          </option>
        </select>
        <br></br>
      </form>

      <div>
        <ul className={Style.List}>
          {articles.map((article) => {
            return (
              <div key={article.article_id}>
                <Link
                  className={Style.link}
                  key={article.article_id}
                  to={`/articles/${article.article_id}`}
                >
                  <li className={Style.Item}>
                    <div className={Style.header}>
                      <h2>
                        {article.topic[0].toUpperCase()}
                        {article.topic.slice(1)}
                      </h2>
                      <br />
                    </div>
                    <div className={Style.body}>{article.title}</div>
                    <br />
                    <p className={Style.footer}>
                      Written by: {article.author[0].toUpperCase()}
                      {article.author.slice(1)}
                    </p>
                  </li>

                  <br />
                </Link>
                <br />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
