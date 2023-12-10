// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {iplMatchData: [], isSpin: true}

  componentDidMount() {
    this.getEachTeamDetails()
  }

  getEachTeamDetails = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()

    const updatedTeamsData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplMatchData: updatedTeamsData, isSpin: false})
  }

  render() {
    const {iplMatchData, isSpin} = this.state

    return (
      <div className="main-container">
        {isSpin ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="sub-container">
            <div className="ipl-image-text-container">
              <img
                className="ipl-img-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="ipl-text-style">IPL Dashboard</h1>
            </div>
            <ul className="team-info-list">
              {iplMatchData.map(each => (
                <TeamCard matchDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
