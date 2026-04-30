const Movie = ({ movie }) => <li>{movie.title}</li>;

const App = ({ movies }) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((m) => (
          <Movie key={m.id} movie={m} />
        ))}
      </ul>
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
