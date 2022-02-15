import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Style from "../nav.module.css";
import { useContext } from "react";
import { UserContext } from "../User";

const Navbar = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <ul className={Style.ul}>
      <Nav>
        <li className={Style.li}>
          <Nav.Link className={Style.a} href="/">
            Home
          </Nav.Link>
        </li>
        <li className={Style.li}>
          <Nav.Link className={Style.a} href="/topics">
            Topics
          </Nav.Link>
        </li>
        <li className={Style.li}>
          <Nav.Link className={Style.a} href="/articles">
            Articles
          </Nav.Link>
        </li>
      </Nav>
    </ul>
  );
};

export default Navbar;
