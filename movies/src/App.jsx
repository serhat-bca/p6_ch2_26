import Movie from "./components/Movie";
import { useState } from "react";

const App = ({ movies }) => {
  const [movieList, setMovies] = useState(movies);
  const [movieName, setName] = useState("");
  const [filter, setFilter] = useState(false);

  const displayedMovies = filter
    ? movieList.filter((m) => m.watchlist)
    : movieList;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    // uncontrolled input field
    // console.log("Message:", e.target.movieName.value);
    // e.target.movieName.value = "";
    console.log("Messgae: ", movieName);
    setName("");
    setMovies([
      ...movieList,
      {
        id: Math.floor(Math.random() * 1000),
        title: movieName,
        watchlist: false,
      },
    ]);
  };

  return (
    <div>
      <h2>Movies</h2>
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
      <h3>Add a new movie</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} value={movieName} />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;

{
  /* <li>{movies[0].title}</li>
<li>{movies[1].title}</li>
<li>{movies[2].title}</li>
<li>{movies[3].title}</li>
<li>{movies[4].title}</li> */
}

{
  /* {movies.map((m) => {
  return <li>{m.title}</li>;
})} */
}
