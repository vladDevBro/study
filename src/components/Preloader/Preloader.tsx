import React from "react";

//@ts-ignore
import loader from "./loader.svg";

//@ts-ignore
import styles from "./Preloader.module.scss";

export const Preloader = () => {
  return (
    <>
      <img src={loader} className={styles.preloader} alt={"loader"} />
    </>
  );
};
