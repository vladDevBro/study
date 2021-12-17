import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Card, Preloader } from "..";
import { URL_IMG } from "../../config/constants";
import {
  fetchPopMovies,
  fetchRevMovies,
} from "../../store/actions/actionCreators";

import styles from "./Main.module.scss";

export const Main = () => {
  const {
    revmovies,
    loading: revload,
    error: reverror,
  } = useSelector((state) => state.revReducer);

  const {
    popmovies,
    loading: popload,
    error: poperror,
  } = useSelector((state) => state.popReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRevMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPopMovies());
  }, [dispatch]);

  if (revload || popload) {
    return <Preloader />;
  }

  if (reverror || poperror) {
    return <h1>{poperror || reverror}</h1>;
  }

  return (
    <article className={styles.main}>
      {popmovies.length && (
        <Link to={"./popular"}>
          <h1>The {popmovies.length} Popular Movies</h1>
          <Card
            key={popmovies[0].id}
            title={popmovies[0].title}
            overview={popmovies[0].overview}
            image={`${URL_IMG}${popmovies[0].poster_path}`}
            releaseDate={popmovies[0].release_date}
            rate={popmovies[0].vote_average}
          />
        </Link>
      )}
      {revmovies.length && (
        <Link to={"./revenue"}>
          <h1>The {revmovies.length} Revenue Movies</h1>
          <Card
            key={revmovies[0].id}
            title={revmovies[0].title}
            overview={revmovies[0].overview}
            image={`${URL_IMG}${revmovies[0].poster_path}`}
            releaseDate={revmovies[0].release_date}
            rate={revmovies[0].vote_average}
          />
        </Link>
      )}
    </article>
  );
};
