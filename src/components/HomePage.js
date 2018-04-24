import React, { Component } from 'react';
import eplLogo from './EPL-Logo.jpg'
import './App.css';
import axios from 'axios'
import EplTable from './PremierLeagueTable'
import CompareTeamsDribble from './compareTeamsDribble'
import CompareTeamsAerial from './compareTeamsAerial';
import CompareTeamShots from './compareTeamsShots'
var secret = require('../secrets.js')

//require('dotenv').config()

// const _ = require('lodash')




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: arsenalPlayers,
      selectedTeam: sortedTeamNames[0],
      teamPerformances: teamStats,
      teamMatches: arsenalMatches.matches,
      teamOne: '',
      teamTwo: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.selectTeamSubmit = this.selectTeamSubmit.bind(this)
    this.fetchPlayers = this.fetchPlayers.bind(this)
    this.fetchGameData = this.fetchGameData.bind(this)
    this.fetchDoubleGameData = this.fetchDoubleGameData.bind(this)
    // this.fetchPlayerData = this.fetchPlayerData.bind(this)
    console.log('secret', secret.API_KEY)
}



fetchPlayers(){
  console.log('PROCESS', secret.API_KEY)
  return  axios.get(
    `https://heisenbug-premier-league-live-scores-v1.p.mashape.com/api/premierleague/players?team=${this.state.selectedTeam}`,
    {
headers: {'X-Mashape-Key': secret.API_KEY}
    }
  )
  .then(res => {
    res.data
    this.setState({
      players: res.data.players
    })
  })
  .catch(err => console.error("Fetching player data failed", err))
}

fetchGameData(){
  return axios.get(
    `https://heisenbug-premier-league-live-scores-v1.p.mashape.com/api/premierleague?team1=${this.state.selectedTeam}`,
    {
      headers: {'X-Mashape-Key': secret.API_KEY}
    }
  )
  .then(res => {
    res.data
    this.setState({
      teamMatches: res.data.matches
    })
  })
  .catch(err => console.error('fetching game data failed', err))
}

fetchDoubleGameData(){
  return axios.get(
    `https://heisenbug-premier-league-live-scores-v1.p.mashape.com/api/premierleague/match/stats?team1=${this.state.teamOne}&team2=${this.state.teamTwo}`,
    {
      headers: {'X-Mashape-Key': secret.API_KEY}
    }
  ).then(res =>{
    res.data
    this.setState({
      teamPerformances: res.data
    })
  })
  .catch(err => console.error('fetching game data failed', err))
}

// fetchPlayerData(){
//   return  axios.get(
//     "https://heisenbug-premier-league-live-scores-v1.p.mashape.com/api/premierleague/match/player?player=Aaron+Ramsey&team1=Everton&team2=Arsenal",
//     {
// headers: {'X-Mashape-Key': 'lxRISsQUiqmshDF8GLLL0MDMjoVmp1lU0nPjsnWGkdEF1XI8bE'}
//     }
//   )
//   .then(res => {
//     res.data
//     console.log(res.data)
//     this.setState({
//       team1performance: res.data
//     })
//   })
//   .catch(err => console.error("Fetching player data failed", err)) 
// }

// componentDidMount(){
//     this.fetchPlayers()
//     this.fetchPlayerData()
// }

teamCompareSearch(){
    return(
      <div className = 'search-teams'>
      <h2> Compare Match Stats</h2>
      <div className="search-box">
      <form onSubmit={this.handleSubmit}
      >
      <div className="fas fa-search" />
        <input onChange = {event =>
                        this.setState({teamOne: event.target.value})
                    }
        name="search1" 
              id="search-field"
              required
              placeholder = 'Home Team' >
        </input>
      <div className="search-box">
            <div className="fas fa-search" />
              <input onChange = {event =>
                        this.setState({teamTwo: event.target.value})
                    }
              name="search2"
               id="search-field"
               required
               placeholder = 'Away Team' >
              </input>
              <div>
              <button type="submit">Submit Teams</button>
              </div>
              
           
            </div>
            </form>
            </div>
            </div>
    )
}

handleSubmit(evt) {
  evt.preventDefault()
  const searchTerm1 = evt.target.search1.value
  const searchTerm2 = evt.target.search2.value
  this.setState({
      teamOne: searchTerm1,
      teamTwo: searchTerm2
  })
  this.fetchDoubleGameData()
}
selectTeamSubmit(evt){
  evt.preventDefault()
  this.setState({
    selectedTeam: evt.target.teamSelection.value
  })
  this.fetchPlayers()
  this.fetchGameData()
}



  render() {
    // const playersArr = _.values(this.state.players)
    // this.state.players === [] ? null :
    const teamOneStats = this.state.team1performance
    const teamTwoStats = this.state.team2performance
    const match = this.state.teamMatches
    // const data = [{teamName: teamOneStats.teamName, Headers: teamOneStats.aerialsTotal},
    //   {teamName: teamTwoStats.teamName, Headers: teamTwoStats.aerialsTotal},
    //   {teamName: teamOneStats.teamName, HeaderWins: teamOneStats.aerialsWon},
    //   {teamName: teamTwoStats.teamName, HeaderWins: teamTwoStats.aerialsWon}]
    return (
      <div className="App">
      <header className="App-header">
          <img src={eplLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Premier League Visualizer</h1>
        </header>
        <p className="App-intro">
        </p>
        <div className = 'eplTable'>
        <h2>Live Updating Premier League Table</h2>
        <EplTable/>
        </div>
        <div className = 'selector'>
        <h1>{`${this.state.selectedTeam}`}</h1>
      <h3>Select a Team</h3>
      <form onSubmit={this.selectTeamSubmit}>
          <select name="teamSelection" onChange={event =>
          this.setState({ selectedTeam: event.target.value })}
              value={this.state.selectedTeam}
          >
              {
                  sortedTeamNames
                      .map(option => (
                          <option key={option}>
                              {option}
                          </option>
                      )
                  )}
          </select>
          <button type='submit'> Select Team </button>
          </form>
          </div>
          <div className= 'home-match-container'>
          <h1>Home Games</h1>
          {this.state.teamMatches.map((match) => 
          <div key= {'home' + match.matchNumber} className = 'match'>
          <h3>{ match.team1.teamName + ' VS '
            + match.team2.teamName} </h3>
            {match.team1.teamScore === undefined ? 
            <h4>The Game Has Not Happened Yet</h4>:
             <h4>{match.team1.teamName + ' ' + match.team1.teamScore}   :   { match.team2.teamScore + ' ' + match.team2.teamName}</h4>}
            {/* <h4>{'When: ' + match.when}</h4> */}
            </div>
          )}
          </div>
          <div className= 'away-match-container'>
          <h1>Away Games</h1>
          {this.state.teamMatches.map((match) => 
          <div key= {'away' + match.matchNumber} className = 'match'>
          <h3>{ match.team2.teamName + ' VS '
            + match.team1.teamName} </h3>
            {match.team1.teamScore === undefined ? 
            <h4>The Game Has Not Happened Yet</h4>:
             <h4>{match.team1.teamName + ' ' + (match.team1.teamScore +1)}   :   { (match.team2.teamScore+1) + ' ' + (match.team2.teamName)}</h4>}
            {/* <h4>{'When: ' + match.when}</h4> */}
            </div>
          )}
          </div>
          <div className = 'player-list'>
      {
        this.state.players.map((player)=> 
        <h3 key={player.playerName}>{player.playerName + ': ' + player.position}</h3>)
      }
      </div>
        {this.teamCompareSearch()}

        
        <CompareTeamsDribble teamPerformances = {this.state.teamPerformances}/>
        <CompareTeamsAerial teamPerformances = {this.state.teamPerformances}/>
        <CompareTeamShots teamPerformances = {this.state.teamPerformances}/>
        
       
      </div>
    );
  }
}


const teamStats={
  "team1": {
    "teamName": "Stoke",
    "teamStats": {
      "cornersTotal": 3,
      "dribbledPast": 10,
      "tackleSuccessful": 25,
      "throwInsTotal": 25,
      "aerialsTotal": 37,
      "offensiveAerials": 21,
      "dispossessed": 8,
      "foulsCommited": 9,
      "passesTotal": 412,
      "offsidesCaught": 3,
      "shotsOnTarget": 1,
      "tackleUnsuccesful": 10,
      "defensiveAerials": 16,
      "interceptions": 13,
      "touches": 571,
      "shotsOffTarget": 4,
      "tacklesTotal": 35,
      "dribblesWon": 5,
      "dribblesLost": 11,
      "shotsTotal": 7,
      "shotsBlocked": 2,
      "aerialsWon": 16,
      "clearances": 16,
      "dribblesAttempted": 16
    }
  },
  "team2": {
    "teamName": "Liverpool",
    "teamStats": {
      "cornersTotal": 5,
      "dribbledPast": 5,
      "tackleSuccessful": 19,
      "throwInsTotal": 22,
      "aerialsTotal": 37,
      "offensiveAerials": 16,
      "dispossessed": 16,
      "foulsCommited": 16,
      "passesTotal": 478,
      "offsidesCaught": 2,
      "shotsOnTarget": 3,
      "tackleUnsuccesful": 5,
      "defensiveAerials": 21,
      "interceptions": 13,
      "touches": 642,
      "shotsOffTarget": 1,
      "tacklesTotal": 24,
      "dribblesWon": 10,
      "dribblesLost": 9,
      "shotsTotal": 8,
      "shotsBlocked": 4,
      "aerialsWon": 21,
      "clearances": 33,
      "dribblesAttempted": 19
    }
  }
}


const teamNames = ["Manchester City", "Manchester United", "Liverpool", "Tottenham", "Chelsea", "Arsenal", "Burnley", "Leicester", "Everton", "Watford", "Brighton", "Bournemouth", "Newcastle United", "Swansea", "Huddersfield", "West Ham", "Southampton", "Stoke", "Crystal Palace", "West Bromwich Albion"]
const sortedTeamNames = teamNames.sort()












































const arsenalPlayers = [{playerName: "Alex Oxlade Chamberlain", age: 24, position: "Midfielder", active: "false"},
      {playerName: "Alexandre Lacazette", age: 26, position: "Forward", active: "true"},
      {playerName: "Granit Xhaka", age: 25, position: "Midfielder", active: "true"},
      {playerName: "Sead Kolasinac", age: 24, position: "Defender", active: "true"},
      {playerName: "Olivier Giroud", age: 31, position: "Forward", active: "false"},
      {playerName: "Aaron Ramsey", age: 27, position: "Midfielder", active: "true"},
      {playerName: "Nacho Monreal", age: 32, position: "Defender", active: "true"},
      {playerName: "Mesut Özil", age: 29, position: "Midfielder", active: "true"},
      {playerName: "Héctor Bellerín", age: 22, position: "Defender", active: "true"},
      {playerName: "Mohamed Elneny", age: 25, position: "Midfielder", active: "true"},
      {playerName: "Theo Walcott", age: 28, position: "Forward", active: "false"},
      {playerName: "Petr Cech", age: 35, position: "Goalkeeper", active: "true"},
      {playerName: "Shkodran Mustafi", age: 25, position: "Defender", active: "true"},
      {playerName: "Reiss Nelson", age: 18, position: "Forward", active: "true"},
      {playerName: "Danny Welbeck", age: 27, position: "Forward", active: "true"},
      {playerName: "Rob Holding", age: 22, position: "Defender", active: "true"},
      {playerName: "Alex Iwobi", age: 21, position: "Midfielder", active: "true"},
      {playerName: "Laurent Koscielny", age: 32, position: "Defender", active: "true"},
      {playerName: "Alexis Sánchez", age: 29, position: "Forward", active: "false"},
      {playerName: "Francis Coquelin", age: 26, position: "Midfielder", active: "false"},
      {playerName: "Per Mertesacker", age: 33, position: "Defender", active: "true"},
      {playerName: "Jack Wilshere", age: 26, position: "Midfielder", active: "true"},
      {playerName: "Mohamed El Neny", age: 25, position: "Midfielder", active: "false"},
      {playerName: "Ainsley Maitland-Niles", age: 20, position: "Midfielder", active: "true"},
      {playerName: "Calum Chambers", age: 23, position: "Defender", active: "true"},
      {playerName: "Henrikh Mkhitaryan", age: 29, position: "Midfielder", active: "true"},
      {playerName: "Pierre-Emerick Aubameyang", age: 28, position: "Forward", active: "true"},
      {playerName: "David Ospina", age: 29, position: "Goalkeeper", active: "true"},
      {playerName: "Eddie Nketiah", age: 18, position: "Forward", active: "true"}]


// const chelsea = [
// 0
// :
// {playerName: "Álvaro Morata", age: 25, position: "Forward", active: "true"}
// 1
// :
// {playerName: "Willian", age: 29, position: "Midfielder", active: "true"}
// 2
// :
// {playerName: "Marcos Alonso", age: 27, position: "Defender", active: "true"}
// 3
// :
// {playerName: "César Azpilicueta", age: 28, position: "Defender", active: "true"}
// 4
// :
// {playerName: "David Luiz", age: 30, position: "Defender", active: "true"}
// 5
// :
// {playerName: "Andreas Christensen", age: 21, position: "Defender", active: "true"}
// 6
// :
// {playerName: "Antonio Rüdiger", age: 25, position: "Defender", active: "true"}
// 7
// :
// {playerName: "N'Golo Kanté", age: 26, position: "Midfielder", active: "true"}
// 8
// :
// {playerName: "Michy Batshuayi", age: 24, position: "Forward", active: "false"}
// 9
// :
// {playerName: "Thibaut Courtois", age: 25, position: "Goalkeeper", active: "true"}
// 10
// :
// {playerName: "Cesc Fàbregas", age: 30, position: "Midfielder", active: "true"}
// 11
// :
// {playerName: "Gary Cahill", age: 32, position: "Defender", active: "true"}
// 12
// :
// {playerName: "Victor Moses", age: 27, position: "Midfielder", active: "true"}
// 13
// :
// {playerName: "Tiemoué Bakayoko", age: 23, position: "Midfielder", active: "true"}
// 14
// :
// {playerName: "Pedro", age: 30, position: "Forward", active: "true"}
// 15
// :
// {playerName: "Jeremie Boga", age: 20, position: "Midfielder", active: "false"}
// 16
// :
// {playerName: "Davide Zappacosta", age: 25, position: "Defender", active: "true"}
// 17
// :
// {playerName: "Eden Hazard", age: 27, position: "Midfielder", active: "true"}
// 18
// :
// {playerName: "Daniel Drinkwater", age: 28, position: "Midfielder", active: "true"}
// 19
// :
// {playerName: "Charly Musonda", age: 21, position: "Midfielder", active: "false"}
// 20
// :
// {playerName: "Ethan Ampadu", age: 17, position: "Midfielder", active: "true"}
// 21
// :
// {playerName: "Callum Hudson-Odoi", age: 17, position: "Midfielder", active: "true"}
// 22
// :
// {playerName: "Ross Barkley", age: 24, position: "Midfielder", active: "true"}
// 23
// :
// {playerName: "Willy Caballero", age: 36, position: "Goalkeeper", active: "true"}
// 24
// :
// {playerName: "Olivier Giroud", age: 31, position: "Forward", active: "true"}
// 25
// :
// {playerName: "Emerson", age: 23, position: "Defender", active: "true"}]







// const ramseyPerformance = {
//   isFirstEleven: true,
//   isManOfTheMatch: false,
//   name: "Aaron Ramsey",
//   position: "MC",
//   shirtNo: "8",
//   assists
//     :
//     2,
//   crossesTotal
//     :
//     1,
//   dispossessed
//     :
//     2,
//   dribbledPast
//     :
//     1,
//   foulsCommited
//     :
//     2,
//   foulsWon
//     :
//     2,
//   goals
//     :
//     1,
//   subbedIn
//     :
//     0,
//   subbedOut
//     :
//     90,
//   passesSuccessful
//     :
//     44,
//   passesTotal
//     :
//     50,
//   possessionMins
//     :
//     4,
//   shotsOffTarget
//     :
//     2,
//   shotsOnTarget
//     :
//     5,
//   shotsTotal
//     :
//     7,
//   tackleSuccessful
//     :
//     1,
//   tackleUnsuccesful
//     :
//     1,
//   tacklesTotal
//     :
//     2,
//   throwInsTotal
//     :
//     1,
//   touches
//     :
//     69
// }



// const evertonPerformance = {
//     "Everton": {
//       "teamName": "Everton",
//       "teamStats": {
//         "totalSaves": 9,
//         "touches": 477,
//         "passesTotal": 287,
//         "passesSuccessful": 199,
//         "aerialsTotal": 31,
//         "aerialsWon": 18,
//         "tacklesTotal": 19,
//         "tackleSuccessful": 8,
//         "tackleUnsuccesful": 11,
//         "throwInsTotal": 16,
//         "interceptions": 10,
//         "clearances": 30,
//         "offensiveAerials": 20,
//         "defensiveAerials": 11,
//         "shotsTotal": 9,
//         "shotsOffTarget": 4,
//         "shotsBlocked": 2,
//         "shotsOnTarget": 3,
//         "dribblesLost": 4,
//         "dribblesAttempted": 10,
//         "dribblesWon": 6,
//         "dribbledPast": 11,
//         "dispossessed": 8,
//         "foulsCommited": 14,
//         "foulsWon": 12,
//         "offsidesCaught": 2,
//         "possessionMins": 35,
//         "goals": 2,
//         "crossesTotal": 13
//       }
//     }
// }
    
// const arsenalPerformance =  {"Arsenal": {
//         "teamName": "Arsenal",
//         "teamStats": {
//           "totalSaves": 1,
//           "touches": 807,
//           "passesTotal": 616,
//           "passesSuccessful": 516,
//           "aerialsTotal": 31,
//           "aerialsWon": 13,
//           "cornersTotal": 7,
//           "cornersAccurate": 1,
//           "tacklesTotal": 18,
//           "tackleSuccessful": 12,
//           "tackleUnsuccesful": 6,
//           "throwInsTotal": 30,
//           "interceptions": 8,
//           "clearances": 23,
//           "offensiveAerials": 11,
//           "defensiveAerials": 20,
//           "shotsTotal": 30,
//           "shotsOffTarget": 8,
//           "shotsBlocked": 8,
//           "shotsOnTarget": 14,
//           "dribblesLost": 2,
//           "dribblesAttempted": 13,
//           "dribblesWon": 11,
//           "dribbledPast": 6,
//           "dispossessed": 6,
//           "foulsCommited": 14,
//           "foulsWon": 14,
//           "offsidesCaught": 1,
//           "possessionMins": 60,
//           "goals": 5,
//           "crossesTotal": 15,
//           "assists": 4,
//           "errors": 2
//         }
//       }
//     }

const arsenalMatches = {
  "matches": [
    {
      "when": "Saturday, May 05 2018 15:00",
      "team1": {
        "teamName": "Arsenal"
      },
      "team2": {
        "teamName": "Burnley"
      },
      "matchNumber": 37
    },
    {
      "when": "Saturday, Apr 21 2018 15:00",
      "team1": {
        "teamName": "Arsenal"
      },
      "team2": {
        "teamName": "West Ham"
      },
      "matchNumber": 35
    },
    {
      "when": "Monday, Apr 09 2018 20:00",
      "team1": {
        "teamName": "Arsenal"
      },
      "team2": {
        "teamName": "Southampton"
      },
      "matchNumber": 33
    },
    {
      "when": "Sunday, Apr 01 2018 13:30",
      "team1": {
        "teamName": "Arsenal"
      },
      "team2": {
        "teamName": "Stoke"
      },
      "matchNumber": 32
    },
    {
      "when": "Sunday, Mar 11 2018 13:30",
      "referee": "Martin Atkinson",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 3,
        "firstHalfScore": 1
      },
      "team2": {
        "teamName": "Watford",
        "teamScore": 0,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 30
    },
    {
      "when": "Thursday, Mar 01 2018 19:45",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 0,
        "firstHalfScore": 0
      },
      "team2": {
        "teamName": "Manchester City",
        "teamScore": 3,
        "firstHalfScore": 3
      },
      "time": "FT",
      "matchNumber": 28
    },
    {
      "when": "Saturday, Feb 03 2018 17:30",
      "referee": "Neil Swarbrick",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 5,
        "firstHalfScore": 4
      },
      "team2": {
        "teamName": "Everton",
        "teamScore": 1,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 26
    },
    {
      "when": "Saturday, Jan 20 2018 15:00",
      "referee": "Chris Kavanagh",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 4,
        "firstHalfScore": 4
      },
      "team2": {
        "teamName": "Crystal Palace",
        "teamScore": 1,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 24
    },
    {
      "when": "Wednesday, Jan 03 2018 19:45",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 2,
        "firstHalfScore": 0
      },
      "team2": {
        "teamName": "Chelsea",
        "teamScore": 2,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 22
    },
    {
      "when": "Friday, Dec 22 2017 19:45",
      "referee": "Martin Atkinson",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 3,
        "firstHalfScore": 0
      },
      "team2": {
        "teamName": "Liverpool",
        "teamScore": 3,
        "firstHalfScore": 1
      },
      "time": "FT",
      "matchNumber": 19
    },
    {
      "when": "Saturday, Dec 16 2017 15:00",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 1,
        "firstHalfScore": 1
      },
      "team2": {
        "teamName": "Newcastle United",
        "teamScore": 0,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 18
    },
    {
      "when": "Saturday, Dec 02 2017 17:30",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 1,
        "firstHalfScore": 0
      },
      "team2": {
        "teamName": "Manchester United",
        "teamScore": 3,
        "firstHalfScore": 2,
        "redCards": 1
      },
      "time": "FT",
      "matchNumber": 15
    },
    {
      "when": "Wednesday, Nov 29 2017 19:45",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 5,
        "firstHalfScore": 1
      },
      "team2": {
        "teamName": "Huddersfield",
        "teamScore": 0,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 14
    },
    {
      "when": "Saturday, Nov 18 2017 12:30",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 2,
        "firstHalfScore": 2
      },
      "team2": {
        "teamName": "Tottenham",
        "teamScore": 0,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 12
    },
    {
      "when": "Saturday, Oct 28 2017 15:00",
      "referee": "Lee Mason",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 2,
        "firstHalfScore": 0
      },
      "team2": {
        "teamName": "Swansea",
        "teamScore": 1,
        "firstHalfScore": 1
      },
      "time": "FT",
      "matchNumber": 10
    },
    {
      "when": "Sunday, Oct 01 2017 12:00",
      "referee": "Kevin Friend",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 2,
        "firstHalfScore": 1
      },
      "team2": {
        "teamName": "Brighton",
        "teamScore": 0,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 7
    },
    {
      "when": "Monday, Sep 25 2017 20:00",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 2,
        "firstHalfScore": 1
      },
      "team2": {
        "teamName": "West Bromwich Albion",
        "teamScore": 0,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 6
    },
    {
      "when": "Saturday, Sep 09 2017 15:00",
      "referee": "Anthony Taylor",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 3,
        "firstHalfScore": 2
      },
      "team2": {
        "teamName": "Bournemouth",
        "teamScore": 0,
        "firstHalfScore": 0
      },
      "time": "FT",
      "matchNumber": 4
    },
    {
      "when": "Friday, Aug 11 2017 19:45",
      "referee": "Mike Dean",
      "team1": {
        "teamName": "Arsenal",
        "teamScore": 4,
        "firstHalfScore": 2
      },
      "team2": {
        "teamName": "Leicester",
        "teamScore": 3,
        "firstHalfScore": 2
      },
      "time": "FT",
      "matchNumber": 1
    }
  ]
}


export default App;