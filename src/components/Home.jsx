import React from "react";
import "../index.css";
import { useContext } from "react";
import { UserContext } from "../User";
import Style from "../home.module.css";
const Home = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <h2 className={Style.home}>
      Welcome <br /> <br />
      You logged in as a {loggedInUser.username.toUpperCase()} default
      <br />
    </h2>
  );
};

export default Home;
