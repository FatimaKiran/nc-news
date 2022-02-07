import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header'
import Topics from './components/Topics';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path = "/articles" element={<Articles/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<  Topics />} />

            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
