import { Fragment } from "react";
import HeaderCartBtn from "./HeaderCartBtn";
import headImg from "../assets/head.jpg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.h1}>Meals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img src={headImg} alt='main img' />
      </div>
    </Fragment>
  );
};

export default Header;
