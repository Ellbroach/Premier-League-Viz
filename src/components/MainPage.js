import React, { Component } from 'react';
import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
const _ = require('lodash')



const data2012 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  
  const data2013 = [
    {quarter: 1, earnings: 15000},
    {quarter: 2, earnings: 12500},
    {quarter: 3, earnings: 19500},
    {quarter: 4, earnings: 13000}
  ];
  
  const data2014 = [
    {quarter: 1, earnings: 11500},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 20000},
    {quarter: 4, earnings: 15500}
  ];
  
  class App extends React.Component {
      constructor(){
          super()
          this.state = {
            // players: arsenalPlayers,
            team1performance: teamStats.team1,
            team2performance: teamStats.team2,
          }
      }
    render() {
        console.log(eplTable.records)

        // const playersArr = _.values(this.state.players)
        //console.log(playersArr)
        const teamOneStats = this.state.team1performance
        const teamTwoStats = this.state.team2performance
        const data2012 = [
            {quarter: 1, earnings: 13000},
            {quarter: 2, earnings: 16500},
            {quarter: 3, earnings: 14250},
            {quarter: 4, earnings: 19000}
          ];
      return (
      <VictoryChart 
      domainPadding={20}
      theme= {VictoryTheme.material}
      >
      <VictoryAxis
      tickValues={[1,2,3,4]}
      tickFormat={['Arsenal', 'Everton', 'Arsenal', 'Everton']}
      />
      <VictoryAxis 
      dependentAxis
      tickFormat= {(earnings)=>(`${earnings / 1000}K`)}
      />
      <VictoryStack
      colorScale='warm' >
          <VictoryBar 
        data={data2012}
        x="quarter"
        y="earnings" 
        />
        <VictoryBar 
        data={data2013}
        x="quarter"
        y="earnings" 
        />
        <VictoryBar 
        data={data2014}
        x="quarter"
        y="earnings" 
        />
        </VictoryStack>
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
        "points": 78
      },
      {
        "team": "Manchester United",
        "points": 65
      },
      {
        "team": "Liverpool",
        "points": 60
      },
      {
        "team": "Tottenham",
        "points": 58
      },
      {
        "team": "Chelsea",
        "points": 56
      },
      {
        "team": "Arsenal",
        "played": 29,
        "win": 13,
        "draw": 6,
        "loss": 10,
        "goalsFor": 52,
        "goalsAgainst": 41,
        "points": 45
      },
      {
        "team": "Burnley",
        "played": 30,
        "win": 11,
        "draw": 10,
        "loss": 9,
        "goalsFor": 27,
        "goalsAgainst": 26,
        "points": 43
      },
      {
        "team": "Leicester",
        "played": 30,
        "win": 10,
        "draw": 10,
        "loss": 10,
        "goalsFor": 45,
        "goalsAgainst": 43,
        "points": 40
      },
      {
        "team": "Everton",
        "played": 30,
        "win": 10,
        "draw": 7,
        "loss": 13,
        "goalsFor": 35,
        "goalsAgainst": 49,
        "points": 37
      },
      {
        "team": "Watford",
        "played": 29,
        "win": 10,
        "draw": 6,
        "loss": 13,
        "goalsFor": 39,
        "goalsAgainst": 47,
        "points": 36
      },
      {
        "team": "Brighton",
        "played": 30,
        "win": 8,
        "draw": 10,
        "loss": 12,
        "goalsFor": 28,
        "goalsAgainst": 40,
        "points": 34
      },
      {
        "team": "Bournemouth",
        "played": 29,
        "win": 8,
        "draw": 9,
        "loss": 12,
        "goalsFor": 34,
        "goalsAgainst": 44,
        "points": 33
      },
      {
        "team": "Newcastle United",
        "played": 30,
        "win": 8,
        "draw": 8,
        "loss": 14,
        "goalsFor": 30,
        "goalsAgainst": 40,
        "points": 32
      },
      {
        "team": "Swansea",
        "played": 30,
        "win": 8,
        "draw": 7,
        "loss": 15,
        "goalsFor": 25,
        "goalsAgainst": 42,
        "points": 31
      },
      {
        "team": "Huddersfield",
        "played": 30,
        "win": 8,
        "draw": 7,
        "loss": 15,
        "goalsFor": 25,
        "goalsAgainst": 50,
        "points": 31
      },
      {
        "team": "West Ham",
        "played": 30,
        "win": 7,
        "draw": 9,
        "loss": 14,
        "goalsFor": 36,
        "goalsAgainst": 57,
        "points": 30
      },
      {
        "team": "Southampton",
        "played": 30,
        "win": 5,
        "draw": 13,
        "loss": 12,
        "goalsFor": 29,
        "goalsAgainst": 44,
        "points": 28
      },
      {
        "team": "Stoke",
        "played": 29,
        "win": 6,
        "draw": 9,
        "loss": 14,
        "goalsFor": 28,
        "goalsAgainst": 54,
        "points": 27
      },
      {
        "team": "Crystal Palace",
        "played": 30,
        "win": 6,
        "draw": 9,
        "loss": 15,
        "goalsFor": 28,
        "goalsAgainst": 48,
        "points": 27
      },
      {
        "team": "West Bromwich Albion",
        "played": 30,
        "win": 3,
        "draw": 11,
        "loss": 16,
        "goalsFor": 23,
        "goalsAgainst": 47,
        "points": 20
      }
    ]
  }