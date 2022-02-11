import axios from "axios";



const ncNewsApi = axios.create({
    baseURL: "https://nc-news-fatima.herokuapp.com/api",
  });
  
  
  
export const getTopics = () => {
    return ncNewsApi.get("/topics").then((res) => {
        return res.data.topics;
      });
    }

   
    
export const getArticles = (query) => {
  let path = '/articles';
  if(query && query!=="All") path += `?sort_by=${query}`;
    return ncNewsApi.get(path).then((res) => {
        return res.data.articles;
      });     
    }



    export const getArticlesTopic  = (topic,query) => {
      let path = `/articles?topic=${topic}`;
      if(query && query!=='All') path += `&sort_by=${query}`;
      return ncNewsApi.get(path).then((res) => {
        console.log(res.data.articles);
        return (res.data.articles);
      });
    };



    export const getArticlesQuery  = (query) => {
      return ncNewsApi.get(`/articles?=${query}`).then((res) => {
        console.log("helo");
        return (res.data);
    
      });
    };

    export const getArticle = (article_id) => {
      return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article;

      });
    };

    export const patchArticles = (article_id) =>{
      return ncNewsApi.patch(`/articles/${article_id}`,{inc_votes:1})
    }


  export const getCommentByArticleId = (article_id) =>{
    return ncNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
      return res.data.comments;
  })
}

 export const postCommentByArticleId = (article_id, comment ,name) =>{ 
   console.log(name);  return ncNewsApi.post(`/articles/${article_id}/comments`,{
    body:comment, username:name
  }).then((res)=>{
  }) 
}

export const deleteCommentById = (comment_id) =>{
  return ncNewsApi.delete(`/comments/${comment_id}`).then(()=>{
    alert("comment deleted");
  });
}