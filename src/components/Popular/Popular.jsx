import React, { useEffect, useState } from "react";

import { Card } from "..";
import { UserApi } from "../../api/api";
import { URL_IMG } from "../../config/constants";

import styles from "./Popular.module.scss";

export const Popular = () => {
  const [pop, setpop] = useState();

  const getMovies = async () => {
    const responsePopData = await UserApi.getSortPopularityMovies();

    await setpop(responsePopData.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className={styles.wrapper}>
      {pop?.length &&
        pop.map((movie) => {
          return (
            <Card
              key={movie.id}
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
