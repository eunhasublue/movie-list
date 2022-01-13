import React, { useState } from "react";
import MovieForm from "../components/MovieForm";
import Movie from "../components/Movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : "영화 목록이 존재하지 않습니다.";

  const onAddMove = (moive) => {
    setMovies([...movies, moive]);
  };
  return (
    <>
      <h1>Movie List</h1>
      <MovieForm addMovie={onAddMove} />
      {renderMovies}
    </>
  );
};

export default Movies;
