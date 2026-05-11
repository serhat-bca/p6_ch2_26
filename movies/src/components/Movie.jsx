const Movie = ({ movie }) => {
  return (
    <li>
      {movie.title}
      <span> - Watchlist: {movie.watchlist ? "Yes" : "No"} </span>
    </li>
  );
};

export default Movie;
