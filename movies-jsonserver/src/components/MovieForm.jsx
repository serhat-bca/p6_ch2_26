const MovieForm = ({ handleSubmit, setName, movieName }) => {
  return (
    <div>
      <h3>Add a new movie</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} value={movieName} />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
