import React from "react";
import MovieCard from "./MovieCard";
import PropType from "prop-types";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    
    return (
        movies.map((movie) => (
        <MovieCard key={ movie.title } movie={ movie } />))
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieList;
