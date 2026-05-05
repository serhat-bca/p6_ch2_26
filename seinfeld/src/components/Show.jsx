const Show = ({ show }) => {

const total = show.episodes.reduce((a, episode) => a + episode.views, 0)


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
      <p>Total views: {total.toLocaleString()}</p>
    </div>
  );
};

export default Show;
