import Movie from "./components/Movie";
import { useState } from "react";

const App = ({ movies }) => {
  const [movieList, setMovies] = useState(movies);
  const [movieName, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    // uncontrolled input field
    // console.log("Message:", e.target.movieName.value);
    // e.target.movieName.value = "";
    console.log("Messgae: ",movieName)
    setName("");
  };

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((m) => (
          <Movie key={m.id} movie={m} />
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
