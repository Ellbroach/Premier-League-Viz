import React from 'react';
import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryContainer } from 'victory';

  class App extends React.Component {
      constructor(){
          super()
          this.state = {
            // players: arsenalPlayers,
            team1performance: teamStats.team1,
            team2performance: teamStats.team2
          }
          //console.log('EPL TABLE', eplTable.records)
      }

      abbreviator(table){
        let teamNames = []
        for(var i =0; i< table.length; i++){
          if(table[i].team.includes(' ')){
            let splitter = table[i].team.split(' ')
            let initials = splitter[0].slice(0,1) + splitter[1].slice(0,1)
            teamNames.push(initials)
          }else{
            teamNames.push(table[i].team.slice(0,2))
          }
        }
        return teamNames
      }

    render() {
        // const playersArr = _.values(this.state.players)
        //console.log(playersArr)
        // const teamOneStats = this.state.team1performance
        // const teamTwoStats = this.state.team2performance
      return (
      <VictoryChart 
      containerComponent ={<VictoryContainer responsive={false}/>}
      height = {550}
      width = {950}
      domainPadding={40}
      theme= {VictoryTheme.material}
      >
      <VictoryAxis
      tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
      tickFormat={this.abbreviator(eplTable.records)}
      />
      <VictoryAxis 
      dependentAxis
      tickFormat= {(points)=>`${points + " pts"}`}
      />
          <VictoryBar 
          cornerRadius={6}
        data={eplTable.records}
        barRatio={0.8}
        x="team"
        y="points" 
        />
        </VictoryChart>
        )
    }
  }
  
export default App;

//   ReactDOM.render(<App/>, mountNode);


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




  const eplTable = {
    "records": [
      {
        "team": "Manchester City",
        "points": 78,
        fill: "99C5E7"
      },
      {
        "team": "Manchester United",
        "points": 65,
        fill: "DC1F29"
      },
      {
        "team": "Liverpool",
        "points": 60,
        fill : 'E0202C'
      },
      {
        "team": "Tottenham",
        "points": 58,
        fill : '11214B'
      },
      {
        "team": "Chelsea",
        "points": 56,
        fill : "034694"
      },
      {
        "team": "Arsenal",
        "points": 45,
        fill : 'D80919'
      },
      {
        "team": "Burnley",
        "points": 43,
        fill : '80234C'
      },
      {
        "team": "Leicester",
        "points": 40,
        fill : '1358A1'
      },
      {
        "team": "Everton",
        "points": 37,
        fill : '063A99'
      },
      {
        "team": "Watford",
        "points": 36,
        fill : 'FEEB00'
      },
      {
        "team": "Brighton",
        "points": 34,
        fill : '0A56A3'
      },
      {
        "team": "Bournemouth",
        "points": 33,
        fill : 'D41E2A'
      },
      {
        "team": "Newcastle United",
        "points": 32,
        fill : 'C2A475'
      },
      {
        "team": "Swansea",
        "points": 31,
        fill : '121212'
      },
      {
        "team": "Huddersfield",
        "points": 31,
        fill : '0E63AD'
      },
      {
        "team": "West Ham",
        "points": 30,
        fill : '7A263A'
      },
      {
        "team": "Southampton",
        "points": 28,
        fill : 'D41E29'
      },
      {
        "team": "Stoke",
        "points": 27,
        fill : 'D0122D'
      },
      {
        "team": "Crystal Palace",
        "points": 27,
        fill : '1B458F'
      },
      {
        "team": "West Bromwich Albion",
        "points": 20,
        fill : '122F67'
      }
    ]
  }

  // {
  //   "records": [
  //     {
  //       "team": "Manchester City",
  //       "played": 30,
  //       "win": 26,
  //       "draw": 3,
  //       "loss": 1,
  //       "goalsFor": 85,
  //       "goalsAgainst": 20,
  //       "points": 81
  //     },
  //     {
  //       "team": "Manchester United",
  //       "played": 30,
  //       "win": 20,
  //       "draw": 5,
  //       "loss": 5,
  //       "goalsFor": 58,
  //       "goalsAgainst": 23,
  //       "points": 65
  //     },
  //     {
  //       "team": "Liverpool",
  //       "played": 31,
  //       "win": 18,
  //       "draw": 9,
  //       "loss": 4,
  //       "goalsFor": 73,
  //       "goalsAgainst": 34,
  //       "points": 63
  //     },
  //     {
  //       "team": "Tottenham",
  //       "played": 30,
  //       "win": 18,
  //       "draw": 7,
  //       "loss": 5,
  //       "goalsFor": 59,
  //       "goalsAgainst": 25,
  //       "points": 61
  //     },
  //     {
  //       "team": "Chelsea",
  //       "played": 30,
  //       "win": 17,
  //       "draw": 5,
  //       "loss": 8,
  //       "goalsFor": 52,
  //       "goalsAgainst": 27,
  //       "points": 56
  //     },
  //     {
  //       "team": "Arsenal",
  //       "played": 30,
  //       "win": 14,
  //       "draw": 6,
  //       "loss": 10,
  //       "goalsFor": 55,
  //       "goalsAgainst": 41,
  //       "points": 48
  //     },
  //     {
  //       "team": "Burnley",
  //       "played": 30,
  //       "win": 11,
  //       "draw": 10,
  //       "loss": 9,
  //       "goalsFor": 27,
  //       "goalsAgainst": 26,
  //       "points": 43
  //     },
  //     {
  //       "team": "Leicester",
  //       "played": 30,
  //       "win": 10,
  //       "draw": 10,
  //       "loss": 10,
  //       "goalsFor": 45,
  //       "goalsAgainst": 43,
  //       "points": 40
  //     },
  //     {
  //       "team": "Everton",
  //       "played": 31,
  //       "win": 11,
  //       "draw": 7,
  //       "loss": 13,
  //       "goalsFor": 37,
  //       "goalsAgainst": 50,
  //       "points": 40
  //     },
  //     {
  //       "team": "Watford",
  //       "played": 31,
  //       "win": 10,
  //       "draw": 6,
  //       "loss": 15,
  //       "goalsFor": 39,
  //       "goalsAgainst": 55,
  //       "points": 36
  //     },
  //     {
  //       "team": "Bournemouth",
  //       "played": 31,
  //       "win": 9,
  //       "draw": 9,
  //       "loss": 13,
  //       "goalsFor": 37,
  //       "goalsAgainst": 49,
  //       "points": 36
  //     },
  //     {
  //       "team": "Brighton",
  //       "played": 30,
  //       "win": 8,
  //       "draw": 10,
  //       "loss": 12,
  //       "goalsFor": 28,
  //       "goalsAgainst": 40,
  //       "points": 34
  //     },
  //     {
  //       "team": "Newcastle United",
  //       "played": 30,
  //       "win": 8,
  //       "draw": 8,
  //       "loss": 14,
  //       "goalsFor": 30,
  //       "goalsAgainst": 40,
  //       "points": 32
  //     },
  //     {
  //       "team": "Swansea",
  //       "played": 30,
  //       "win": 8,
  //       "draw": 7,
  //       "loss": 15,
  //       "goalsFor": 25,
  //       "goalsAgainst": 42,
  //       "points": 31
  //     },
  //     {
  //       "team": "Huddersfield",
  //       "played": 31,
  //       "win": 8,
  //       "draw": 7,
  //       "loss": 16,
  //       "goalsFor": 25,
  //       "goalsAgainst": 52,
  //       "points": 31
  //     },
  //     {
  //       "team": "West Ham",
  //       "played": 30,
  //       "win": 7,
  //       "draw": 9,
  //       "loss": 14,
  //       "goalsFor": 36,
  //       "goalsAgainst": 57,
  //       "points": 30
  //     },
  //     {
  //       "team": "Crystal Palace",
  //       "played": 31,
  //       "win": 7,
  //       "draw": 9,
  //       "loss": 15,
  //       "goalsFor": 30,
  //       "goalsAgainst": 48,
  //       "points": 30
  //     },
  //     {
  //       "team": "Southampton",
  //       "played": 30,
  //       "win": 5,
  //       "draw": 13,
  //       "loss": 12,
  //       "goalsFor": 29,
  //       "goalsAgainst": 44,
  //       "points": 28
  //     },
  //     {
  //       "team": "Stoke",
  //       "played": 31,
  //       "win": 6,
  //       "draw": 9,
  //       "loss": 16,
  //       "goalsFor": 29,
  //       "goalsAgainst": 58,
  //       "points": 27
  //     },
  //     {
  //       "team": "West Bromwich Albion",
  //       "played": 31,
  //       "win": 3,
  //       "draw": 11,
  //       "loss": 17,
  //       "goalsFor": 24,
  //       "goalsAgainst": 49,
  //       "points": 20
  //     }
  //   ]
  // }