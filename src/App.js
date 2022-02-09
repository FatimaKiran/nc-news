import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Topics from './components/Topics';
import Articles from './components/Articles';
import Article from './components/Article';
import Comment from './components/Comment';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path = "/articles" element={<Articles/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<  Topics />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/articles/:article_id/comments" element={<Comment />} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
