import Movie from "./Movie";

const MovieList = ({
  setFilter,
  filter,
  displayedMovies,
  movieList,
  setMovies,
}) => {
  return (
    <div>
      <button onClick={() => setFilter(!filter)}>
        {filter ? "Show All Movies" : "Show Watchlist"}
      </button>
      <ul>
        {displayedMovies.map((m) => (
          <Movie
            movieList={movieList}
            setMovies={setMovies}
            key={m.id}
            movie={m}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
