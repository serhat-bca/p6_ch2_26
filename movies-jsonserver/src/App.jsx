import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

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
      <MovieList
        setFilter={setFilter}
        filter={filter}
        displayedMovies={displayedMovies}
        movieList={movieList}
        setMovies={setMovies}
      />
      <MovieForm
        handleSubmit={handleSubmit}
        setName={setName}
        movieName={movieName}
      />
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
