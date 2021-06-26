import React, { useState, createContext } from 'react';
export const MovieContext = createContext();
export const MovieProvider = (props) => {
  const [movieList, setMovieList] = useState([
    {
      name: 'Harry Potter',
      price: 5000,
      id: 2122,
    },
    {
      name: 'Baby Boss',
      price: 1000,
      id: 9822,
    },
    {
      name: 'Iron Man',
      price: 7000,
      id: 2754,
    },
  ]);
  return (
    <MovieContext.Provider value={[movieList, setMovieList]}>
      {props.children}
    </MovieContext.Provider>
  );
};
