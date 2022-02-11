import React from 'react';
import { useEffect , useState } from 'react';
import { getArticles,getArticlesTopic } from '../api';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { getArticlesQuery } from '../api';
import '../CSS/articles.css';

const Articles = () => {
    const [articles , setArticles] = useState([]);
    const [topic , setTopic] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    const [query , setQuery] = useState("All")
   
    useEffect(()=>{
        if (topic === "All"){
            getArticles(query).then((res) => {
              setArticles(res);
              setIsLoading(false);
            });
          }else if (topic === "cooking"|| topic === "coding" || topic ==="football" ) {
            getArticlesTopic(topic,query).then((res) => {
                
            setArticles(res);
            setIsLoading(false);
          });
        }
        },[topic ,query]);

    function handleChange(event){
        setTopic(event.target.value)
    }

    function handleQuery(event){
      setQuery(event.target.value)
    }

    
    return isLoading ? (
      <p> 🌐LOADING....🌐 </p>
    ) : (
        <>
      <p>Choose a topic from the list </p>
      <form >
        <label htmlFor="topics">Choose a Topic:</label>
        <select name="topics" id="topics" onChange={handleChange}>
          <option value="All">All</option>
          <option value="cooking">Cooking</option>
          <option value="football">football</option>
          <option value="coding">Coding</option>
        </select>
        

      
      </form>
      <br />
    
      <form >
        <label htmlFor="queries">Please Choose:</label>
        <select name="queries" id="queries" onChange={handleQuery}>
          <option value="All">All</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <br></br>

      
      </form>

   <div>
   
       {articles.map((article) => {
            return (
              
                <div className="main">
               <Link  key={article.article_id} to={`/articles/${article.article_id}`}>
                <Card style={{ width: '23em' }}>
                 <Card.Header>{article.topic}</Card.Header>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                </Card.Body>
                <br />
                </Card>
                <br />
               </Link>
<br />
                </div>
            );
          })}


        </div>

</>    );
};

export default Articles;

             
             
             
    
