const MatchList = ({filteredMatches}) => {
  return (
    <ul>
      {filteredMatches.map((item, id)=>(
          <li className="row3" key={id}>
            <div className="left">
              <div className="matchDate">{item.game_date} {item.game_time}</div>
              <div className="matchPlace">{item.place}</div>
            </div>
            <div className="center">
              <div className="gap">
                <span className='homeTeam'>{item.home}</span>
                <i><img src={`./img/${item.home_logo}`} alt="" /></i>
                <span>{item.home_score}</span>
                <span>VS</span>
                <span>{item.away_score}</span>
                <i><img src={`./img/${item.away_logo}`} alt="" /></i>
                <span className='awayTeam'>{item.away}</span>
              </div>
            </div>
            <div className="right">{item.home_score > item.away_score ? '승' : '패'}</div>
          </li>
        ))}
      </ul>
  )
}

export default MatchList
