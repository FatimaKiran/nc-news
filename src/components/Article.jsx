import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../api';
import { useEffect,useState } from 'react';
import Comment from './Comment';
import { Link } from "react-router-dom";

const Article = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});

useEffect(() => {
    getArticle(article_id).then((res)=>{
            setArticle(res)
    })
}, [article_id])
    return (
        <div>
            {console.log(article,"article from Article.js")}
          
          <ul>
               <li>Author: {article.author}</li>
            <li>Topic: {article.topic}</li>
            </ul>
         
            <Link key={article.article_id} to={`/articles/${article.article_id}/comments`}>

              <li> {article.author}</li>
            </Link>
        </div>
    )
};

export default Article;