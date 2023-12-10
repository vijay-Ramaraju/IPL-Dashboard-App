// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {matchDetails} = this.props
    const {id, name, teamImageUrl} = matchDetails

    return (
      <Link className="team-lists" to={`/team-matches/${id}`}>
        <li className="team-lists1" key={id}>
          <img className="ipl-team-logo" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
