import { Fragment } from "react";
import headImg from "../assets/head.jpg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={headImg} alt='main img' />
      </div>
    </Fragment>
  );
};

export default Header;
