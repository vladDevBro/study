import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import classNames from "classnames/bind";

import { BiHome } from "react-icons/bi";
import { BsGrid1X2 } from "react-icons/bs";

import styles from "./Header.module.scss";
import { switchlist, switchPop } from "../../store/actions/actionCreators";

let cx = classNames.bind(styles);

export const Header = ({ main = false, name = "" }) => {
  const { location } = useHistory();

  const dispatch = useDispatch();
  const changeLayout = () => {
    console.log(
      "file: Header.jsx ~ line 21 ~ changeLayout ~ location.pathname",
      location.pathname
    );
    if (location.pathname === "/popular") {
      dispatch(switchPop());
    } else if (location.pathname === "/revenue") {
      dispatch(switchlist());
    }
  };
  return (
    <header className={styles.header}>
      <div
        className={cx(styles.title, {
          [styles.titlemiddle]: main === true,
        })}
      >
        The Best Movie Data Base
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
