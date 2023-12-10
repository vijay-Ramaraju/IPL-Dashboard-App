// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard/index'
import LatestMatch from '../LatestMatch/index'

import './index.css'

class TeamMatches extends Component {
  state = {matchData: [], isSpin: true}

  componentDidMount() {
    this.getEachTeamDetails()
  }

  getEachTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamsData = await response.json()

    const updatedLatestMatchDetails = {
      teamBannerUrl: teamsData.team_banner_url,
      latestMatchDetails: {
        umpires: teamsData.latest_match_details.umpires,
        result: teamsData.latest_match_details.result,
        manOfTheMatch: teamsData.latest_match_details.man_of_the_match,

        id: teamsData.latest_match_details.id,
        date: teamsData.latest_match_details.date,
        venue: teamsData.latest_match_details.venue,
        competingTeam: teamsData.latest_match_details.competing_team,
        competingTeamLogo: teamsData.latest_match_details.competing_team_logo,
        // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
        firstInnings: teamsData.latest_match_details.first_innings,
        secondInnings: teamsData.latest_match_details.second_innings,
        matchStatus: teamsData.latest_match_details.match_status,
      },
      recentMatches: teamsData.recent_matches.map(eachData => ({
        umpire: eachData.umpires,
        result: eachData.result,
        manOfTheMatch: eachData.man_of_the_match,
        id: eachData.id,
        date: eachData.date,
        venue: eachData.venue,
        competingTeam: eachData.competing_team,
        competingTeamLogo: eachData.competing_team_logo,

        firstInnings: eachData.first_innings,
        secondInnings: eachData.second_innings,
        matchStatus: eachData.match_status,
      })),
    }

    this.setState({
      matchData: updatedLatestMatchDetails,
      isSpin: false,
    })
  }

  renderTeamDetails = () => {
    const {matchData} = this.state
    const {teamBannerUrl} = matchData
    const {latestMatchDetails, recentMatches} = matchData

    return (
      <div className="sub-container">
        <img className="banner-image" src={teamBannerUrl} alt="team banner" />
        <div className="latest-container">
          <h1 className="latest-text-heading">Latest Matches</h1>
        </div>

        <LatestMatch latestMatch={latestMatchDetails} />
        {this.recentTeamData()}
      </div>
    )
  }

  recentTeamData = () => {
    const {matchData} = this.state
    const {recentMatches} = matchData
    return (
      <ul className="all-recent-matches">
        {recentMatches.map(eachMatch => (
          <MatchCard recentMatch={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <div className="spinner" testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isSpin} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-match-container ${id}`}>
        {isSpin ? this.renderLoading() : this.renderTeamDetails()}
      </div>
    )
  }
}
export default TeamMatches
