import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { Card } from "..";
import { UserApi } from "../../api/api";
import { URL_IMG } from "../../config/constants";

import styles from "./Revenue.module.scss";

let cx = classNames.bind(styles);

export const Revenue = () => {
  const [revenue, setrevenue] = useState();
  const list = true;

  const getMovies = async () => {
    const responsePopData = await UserApi.getSortRevenueMoviesProfile();

    await setrevenue(responsePopData.results);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <section
        className={cx(styles.wrapper, {
          [styles.wrapperList]: list === true,
          [styles.wrapperGrid]: list === false,
        })}
      >
        {revenue?.length &&
          revenue.map((movie) => {
            return (
              <Card
                key={movie.id}
                list={list}
                title={movie.title}
                overview={movie.overview}
                image={URL_IMG + movie.poster_path}
                releaseDate={movie.release_date}
                rate={movie.vote_average}
              />
            );
          })}
      </section>
    </>
  );
};
