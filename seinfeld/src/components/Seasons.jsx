import Show from './Show'

const Seasons = ({seasons}) => {
  return (
    <div>
      {seasons.map((season) => (

        <Show key = {season.id} show = {season} />
      ))}
    </div>
  )
}

export default Seasons
