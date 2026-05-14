const Movie = ({ movie, movieList, setMovies }) => {
  const updateButton =() =>{
    // setMovies(movieList.map((m)=> m.id===movie.id ? {...m, watchlist: !m.watchlist} : m))
    setMovies(movieList.map(m => {
      if (m.id == movie.id) {
        return {...m, watchlist: !m.watchlist};
      }
      return m;
    }));
  }
  return (
    <li>
      {movie.title}
      <span> - Watchlist: {movie.watchlist ? "Yes" : "No"} </span>
      <span
        onClick={updateButton}
        style={{ fontSize: ".7rem", color: "blue", cursor: "pointer" }}
      >
        ({movie.watchlist ? "Remove" : "Add"})
      </span>
    </li>
  );
};

export default Movie;
