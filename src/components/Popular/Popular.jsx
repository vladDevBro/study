import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";

import { fetchPopMovies } from "../../store/actions/actionCreators";
import { Card, Preloader } from "..";
import { URL_IMG } from "../../config/constants";

import styles from "./Popular.module.scss";

let cx = classNames.bind(styles);

export const Popular = () => {
  const { popmovies, loading, error, list } = useSelector(
    (state) => state.popReducer
  );
  console.log("file: Popular.jsx ~ line 15 ~ Popular ~ list", list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopMovies());
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section
      className={cx(styles.wrapper, {
        [styles.wrapperList]: list === true,
        [styles.wrapperGrid]: list === false,
      })}
    >
      {popmovies?.length &&
        popmovies.map((movie) => {
          return (
            <Card
              key={movie.id}
              list={list}
              title={movie.title}
              overview={movie.overview}
              image={`${URL_IMG}${movie.poster_path}`}
              releaseDate={movie.release_date}
              rate={movie.vote_average}
            />
          );
        })}
    </section>
  );
};
