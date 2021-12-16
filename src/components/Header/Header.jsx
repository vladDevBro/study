import React from "react";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";

import { BiHome } from "react-icons/bi";
import { BsGrid1X2 } from "react-icons/bs";

import styles from "./Header.module.scss";

let cx = classNames.bind(styles);

export const Header = ({ main = false, name = "" }) => {
  const changeLayout = () => {};
  return (
    <header className={styles.header}>
      <div
        className={cx(styles.title, {
          [styles.titlemiddle]: main === true,
        })}
      >
        Movie Data Base
        <span>{name}</span>
      </div>
      <div
        className={cx(styles.icons, {
          [styles.grid]: main === true,
        })}
      >
        <BsGrid1X2 onClick={changeLayout} size={24} color="#6359aa" />
        <Link to={"./"}>
          <BiHome size={24} />
        </Link>
      </div>
    </header>
  );
};
