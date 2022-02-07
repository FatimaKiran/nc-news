import React from 'react';
import { useEffect , useState } from 'react';
import { getArticles } from '../api';
const Articles = () => {
    const [articles , setArticles] = useState([]);
    useEffect(()=>{
        getArticles().then((res)=>{
            setArticles(res)
        })
    },[])

    return (
        <div>
            <ul>
            {articles.map((article) => {
            return (
                <>
                <li key={article.article_id}> {article.topic}
                <br />
                {article.title}
                <br />
                {article.article_id}
                </li>
                </>
            );
          })}
          </ul>
        </div>
    );
};

export default Articles;