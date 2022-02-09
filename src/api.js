import axios from "axios";



const ncNewsApi = axios.create({
    baseURL: "https://nc-news-fatima.herokuapp.com/api",
  });
  
  
  
export const getTopics = () => {
    return ncNewsApi.get("/topics").then((res) => {
        return res.data.topics;
      });
    }

   
export const getArticles = () => {
    return ncNewsApi.get("/articles").then((res) => {
        return res.data.articles;
      });     
    }



    export const getArticlesTopic  = (topic) => {
      return ncNewsApi.get(`/articles?topic=${topic}`).then((res) => {
        return (res.data.articles);
    
      });
    };


    export const getArticle = (article_id) => {
      return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
       console.log(res.data.article);
        return res.data.article;

      });
    };

  export const getCommentByArticleId = (article_id) =>{
    return ncNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
      console.log(res.data.comments);
      return res.data.comments;
  })
}


    // <ul>
    //         {articles.map((article) => {
    //         return (
    //             <>
    //             <li key={article.article_id}> {article.topic}
    //             <br />
    //             {article.title}
    //             <br />
    //             {article.article_id}
    //             </li>
    //             </>
    //         );
    //       })}
    //       </ul>


  //   <Card style={{ width: '18rem' }}>
  //   <Card.Body>
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the bulk of
  //       the card's content.
  //     </Card.Text>
  //     <Button variant="primary">Go somewhere</Button>
  //   </Card.Body>
  // </Card>
  