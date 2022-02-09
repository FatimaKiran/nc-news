import React from 'react';
import { useEffect , useState } from 'react';
import { getArticles,getArticlesTopic } from '../api';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Articles = () => {
    const [articles , setArticles] = useState([]);
    const [topic , setTopic] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(()=>{
        if (topic === "All"){
            getArticles().then((res) => {
              setArticles(res);
              setIsLoading(false);
            });
          }else {
            getArticlesTopic(topic).then((res) => {
                
            setArticles(res);
            setIsLoading(false);
          });
        }
       
    },[topic]);

    function handleChange(event){
        setTopic(event.target.value)
    }

    return isLoading ? (
      <p>...isLoading</p>
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
        <br></br>

      
      </form>
    
   <div>
     <ul>
       {articles.map((article) => {
            return (
                <>
               <Link key={article.article_id} to={`/articles/${article.article_id}`}>
                <Card style={{ width: '23em' }}>
                 <Card.Header>{article.topic}</Card.Header>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                </Card.Body>
                </Card>
               </Link>
<br />
                </>
            );
          })}
          </ul>


        </div>

</>    );
};

export default Articles;

             
             
             
    
