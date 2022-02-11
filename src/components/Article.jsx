import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticle , patchArticles } from '../api';
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';



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
          {/* <ul>
               <li>Author: {article.author}</li>
            <li>Topic: {article.topic}</li>
            <li>Title :{article.title}</li>
            <li>{article.body}</li>
            </ul>
         
            <Link key={article.article_id} to={`/articles/${article.article_id}/comments`}>

              View All comments
              <br />
            </Link>
            <button onClick={addTheVote}> 👍{vote + article.votes}</button> */}
     
     <Card style={{ width: '50rem' }}>
  <Card.Body>
    <Card.Title>{article.topic}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{article.title}</Card.Subtitle>
    <Card.Text> {article.body} </Card.Text>
    <Link key={article.article_id} to={`/articles/${article.article_id}/comments`}>

              View All comments
              <br />
            </Link>
   <span>Like the article:</span> <button onClick={addTheVote}> 👍{vote + article.votes}</button>
    
  </Card.Body>
</Card>
     
        </div>
    )
};

export default Article;