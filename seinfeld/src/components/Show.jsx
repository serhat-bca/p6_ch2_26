const Show = ({ show }) => {
  return (
    <div>
      <h1>{show.title}</h1>
      <ul>
        {show.episodes.map((e) => {
          return (
            <li key={e.id}>
              {e.title} - {e.views.toLocaleString()} views
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Show;
