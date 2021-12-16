import React from "react";
import classNames from "classnames/bind";

import styles from "./Card.module.scss";

let cx = classNames.bind(styles);

export const Card = ({ title, overview, image, releaseDate, rate, list }) => {
  return (
    <div
      className={cx(styles.card, {
        [styles.list]: list === true,
        [styles.grid]: list === false,
      })}
    >
      <figure
        className={cx({
          [styles.figureList]: list === true,
        })}
      >
        <img className={styles.image} src={image} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
      <div
        className={cx(styles.card, {
          [styles.cardBodyList]: list === true,
          [styles.cardBodyGrid]: list === false,
        })}
      >
        <span
          className={cx({
            [styles.overviewList]: list === true,
          })}
        >
          {overview}
        </span>
      </div>
      <div className={cx({ [styles.footerList]: list === true })}>
        <h6 className={styles.rate}>IMDb: {rate}</h6>
        <h6 className={styles.release}>Release: {releaseDate}</h6>
      </div>
    </div>
  );
};
