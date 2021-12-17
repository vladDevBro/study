import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";

import { fetchRevMovies } from "../../store/actions/actionCreators";
import { Card, Preloader } from "..";
import { URL_IMG } from "../../config/constants";

import styles from "./Revenue.module.scss";

let cx = classNames.bind(styles);

export const Revenue = () => {
  const { revmovies, loading, error, listrev } = useSelector(
    (state) => state.revReducer
  );
  console.log("file: Revenue.jsx ~ line 15 ~ Revenue ~ listrev", listrev);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRevMovies());
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <section
        className={cx(styles.wrapper, {
          [styles.wrapperList]: listrev === true,
          [styles.wrapperGrid]: listrev === false,
        })}
      >
        {revmovies?.length &&
          revmovies.map((movie) => {
            return (
              <Card
                key={movie.id}
                list={listrev}
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
