import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="Nav">
        <Link className="Nav__Link" to="/"> Home  </Link>
        <Link className="Nav__Link" to="/topics"> Topics  </Link>
        <Link className="Nav__Link" to="/articles"> Articles </Link>


          </nav>
    );
};

export default Nav;