// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {recentMatch} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = recentMatch
    const isWon = matchStatus === 'Won' ? 'won' : 'lose'
    return (
      <li className="list-card-container">
        <img
          className="image-card-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="card-main-heading"> {competingTeam}</p>
        <p className="winning-by">{result}</p>
        <p className={isWon}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
