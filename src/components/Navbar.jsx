import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../CSS/nav.css';
import { useContext } from 'react';
import { UserContext } from '../User';

const Navbar = () => {
  const {loggedInUser} = useContext(UserContext);
    return (
      <ul className='ul'>
       <Nav> 
      <li className='li'>  <Nav.Link className="a" href="/">Home</Nav.Link> </li>
      <li  className='li'>     <Nav.Link className="a"  href="/topics">Topics</Nav.Link></li>
      <li  className='li'>    <Nav.Link className="a"  href="/articles">Articles</Nav.Link> </li>
      <li  className='li'> <h4 className="a">{loggedInUser.username.toUpperCase()} 🙍</h4> </li>
      </Nav>
      </ul>
    );
};

export default Navbar;