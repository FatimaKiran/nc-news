import React from "react";
import { useContext } from "react";
import { UserContext } from "../User";
import Style from "../home.module.css";
const Home = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
    <div className={Style.home}>
      WELLCOME<br /> <br />
      You logged in as a {loggedInUser.username.toUpperCase()} default
      <br />
    </div>
    </>
  );
};

export default Home;
