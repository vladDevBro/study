import React from "react";
import loader from "./loader.svg";

import styles from "./Preloader.module.scss";

export const Preloader = (props) => {
  return (
    <>
      <img src={loader} className={styles.preloader} alt={"loader"} />
    </>
  );
};
