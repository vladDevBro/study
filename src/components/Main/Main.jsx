import React from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <article className={styles.main}>
      <Link to={"./popular"}>Popular</Link>
      <Link to={"./revenue"}>Revenue</Link>
    </article>
  );
};
