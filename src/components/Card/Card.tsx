import React, { FC } from "react";
import classNames from "classnames/bind";

//@ts-ignore
import styles from "./Card.module.scss";
import { CardProps } from "./Card.props";

let cx = classNames.bind(styles);

export const Card: FC<CardProps> = ({
  title,
  overview,
  image,
  releaseDate,
  rate,
  list,
}: CardProps) => {
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
        {overview && (
          <span
            className={cx({
              [styles.overviewList]: list === true,
            })}
          >
            {overview}
          </span>
        )}
      </div>
      <div className={cx({ [styles.footerList]: list === true })}>
        {rate && <h6 className={styles.rate}>IMDb: {rate}</h6>}
        {releaseDate && (
          <h6 className={styles.release}>Release: {releaseDate}</h6>
        )}
      </div>
    </div>
  );
};
