import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((item, index) => {
        return <h2 key={index}>{item.name}</h2>;
      })}
    </div>
  );
};

export default MovieList;
