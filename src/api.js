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
