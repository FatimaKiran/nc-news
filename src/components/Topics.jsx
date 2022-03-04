import React, { useEffect } from "react";
import { useState } from "react";
import { getTopics } from "../api";
import Error from "./Error";
import Styles from "../Topics.module.css";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then((res) => {
        setTopics(res);
      })
      .catch((err) => {
        setError({ err });
      });
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <p>🌐LOADING....🌐</p>
  ) : (
    <div className={Styles.div}>
      <ul className={Styles.List}>
        {topics.map((topic) => {
          return (
            <div key={topic.slug}>
              <li className={Styles.Item} key={topic.slug}>
                <h2>{topic.slug.toUpperCase()}</h2>
                <br />
                <h3>{topic.description}</h3>
              </li>
              <br />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
