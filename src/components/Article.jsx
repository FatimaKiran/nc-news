import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticle , patchArticles } from '../api';
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";



const Article = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const [vote , setVote] = useState(0);

    

useEffect(() => {
    getArticle(article_id).then((res)=>{
            setArticle(res)
    })
}, [article_id])


function addTheVote(){
    patchArticles(article_id)
    setVote(count => count + 1)
}

    return (
        <div>
          
          <ul>
               <li>Author: {article.author}</li>
            <li>Topic: {article.topic}</li>
            </ul>
         
            <Link key={article.article_id} to={`/articles/${article.article_id}/comments`}>

              Comments
              <br />
            </Link>
            <button onClick={addTheVote}> {vote + article.votes}</button>
        </div>
    )
};

export default Article;