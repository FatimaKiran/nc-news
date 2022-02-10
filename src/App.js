import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Topics from './components/Topics';
import Articles from './components/Articles';
import Article from './components/Article';
import Comment from './components/Comment';
import {UserContext} from './User.js';
import { useState } from 'react';


function App() {
  const [loggedInUser , setLoggedInUser] = useState({username:"jess"});
  const isLoggedIn = loggedInUser !== null;
  return (
    <div className="App">
        <BrowserRouter>
        <UserContext.Provider value={{loggedInUser , setLoggedInUser , isLoggedIn}}>
        <Navbar />
          <Routes>
            <Route path = "/articles" element={<Articles/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<  Topics />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/articles/:article_id/comments" element={<Comment />} />
            
          </Routes>
          </UserContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
