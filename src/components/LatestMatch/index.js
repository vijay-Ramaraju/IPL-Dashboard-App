// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    console.log(latestMatch)
    const {
      umpires,
      result,
      manOfTheMatch,

      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatch
    return (
      <div className="main-latest-container">
        <div>
          <p className="team-name-styles">{competingTeam}</p>
          <p className="date-styles">{date}</p>
          <p className="innings-data-styles">{venue}</p>
          <p className="innings-data-styles">{result}</p>
        </div>
        <img
          className="team-logo-styles"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
        <div className="innings-styles">
          <h2 className="inning-headings-styles">First Innings</h2>
          <p className="innings-data-styles">{firstInnings}</p>
          <h2 className="inning-headings-styles">Second Innings</h2>
          <p className="innings-data-styles">{secondInnings}</p>
          <h2 className="inning-headings-styles">Man Of The Match</h2>
          <p className="innings-data-styles">{manOfTheMatch}</p>
          <h2 className="inning-headings-styles">Umpires</h2>
          <p className="innings-data-styles">{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
