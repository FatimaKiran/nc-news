import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../nav.css';
import { useContext } from 'react';
import { UserContext } from '../User';

const Navbar = () => {
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);
    return (
        <Nav className='navbar' variant="pills">
        <Nav.Item > <Nav.Link className='text' href="/">Home</Nav.Link> </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/topics">Topics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/articles">Articles</Nav.Link>
        </Nav.Item>
        <span>{loggedInUser.username}</span>
      </Nav>


      
    );
};

export default Navbar;