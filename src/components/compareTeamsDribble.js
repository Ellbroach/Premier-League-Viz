import React from 'react';
import './App.css';
import { VictoryPie, VictoryContainer } from 'victory';

class CompareTeamsDribble extends React.Component {
    constructor(props){
      super(props)
      //console.log(this.props.teamPerformances)
  }
  
    render() {

      const teams = this.props.teamPerformances
      const teamOneStats = this.props.teamPerformances.team1.teamStats
      const teamTwoStats = this.props.teamPerformances.team2.teamStats
      //console.log('TEAM ONE STATS', teams)
      const dribbleDataTeamOne = [{x: 1, y: teamOneStats.dribblesWon, label:`Dribbles Won \n (${teamOneStats.dribblesWon})` },
    {x:2, y: teamOneStats.dribblesLost, label:`Dribbles Lost \n (${teamOneStats.dribblesLost})`}]
    const dribbleDataTeamTwo = [{x: 1, y: teamTwoStats.dribblesWon, label:`Dribbles Won \n (${teamTwoStats.dribblesWon})` },
    {x:2, y: teamTwoStats.dribblesLost, label:`Dribbles Lost \n (${teamTwoStats.dribblesLost})`}]
    //console.log(dribbleDataTeamTwo)
      return (
  
        <div className = 'dribbleContainer'>
          <div className = 'homeDribbles'>
          <h1>{`${teams.team1.teamName} Dribble Efficiency`}</h1>
          <h3>{`${teamOneStats.dribblesLost + teamOneStats.dribblesWon} Dribbles Attempted`}</h3>
            <VictoryPie
            cornerRadius={15}
          labelRadius={50}
          style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
          colorScale={["tomato", "orange"]}
          containerComponent ={<VictoryContainer responsive={false}/>}
          data = {dribbleDataTeamOne}
          height= {500}
          width = {500}
          />
          </div>
          <div className = 'awayDribbles'>
          <h1>{`${teams.team2.teamName} Dribble Efficiency`}</h1>
          <h3>{`${teamTwoStats.dribblesLost + teamTwoStats.dribblesWon} Dribbles Attempted`}</h3>
          <VictoryPie
          cornerRadius={15}
          labelRadius={50}
          style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
          colorScale={["green", "#25297E"]}
          containerComponent ={<VictoryContainer responsive={false}/>}
          data = {dribbleDataTeamTwo}
          height= {500}
          width = {500}
          />
          </div>
          <div className = 'dribbleCompare'>
          <h1>{`${teams.team1.teamName} VS ${teams.team2.teamName} Dribble Comparison`}</h1>
          <h3>{`${teamTwoStats.dribblesLost + teamTwoStats.dribblesWon + teamOneStats.dribblesLost + teamOneStats.dribblesWon} Total Dribbles Attempted`}</h3>
          <VictoryPie
          cornerRadius={15}
          labelRadius={50}
          style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
          colorScale={["tomato", "orange", '#25297E', "green"]}
          containerComponent ={<VictoryContainer responsive={false}/>}
          data = {[{x: 1, y: teamOneStats.dribblesWon, label:`${teams.team1.teamName} Dribbles Won \n (${teamOneStats.dribblesWon})`},
        {x:2, y: teamOneStats.dribblesLost, label: `${teams.team1.teamName} Dribbles Lost \n (${teamOneStats.dribblesLost})`},
        {x:3, y: teamTwoStats.dribblesWon, label: `${teams.team2.teamName} Dribbles Won \n (${teamTwoStats.dribblesWon})`},
        {x:4, y: teamTwoStats.dribblesLost, label: `${teams.team2.teamName} Dribbles Lost \n (${teamTwoStats.dribblesLost})`}
    ]}
          height= {500}
          width = {500}
          />
          </div>
        </div>
      );
    }
  }




  // const teamStats={
  //   "team1": {
  //     "teamName": "Stoke",
  //     "teamStats": {
  //       "cornersTotal": 3,
  //       "dribbledPast": 10,
  //       "tackleSuccessful": 25,
  //       "throwInsTotal": 25,
  //       "aerialsTotal": 37,
  //       "offensiveAerials": 21,
  //       "dispossessed": 8,
  //       "foulsCommited": 9,
  //       "passesTotal": 412,
  //       "offsidesCaught": 3,
  //       "shotsOnTarget": 1,
  //       "tackleUnsuccesful": 10,
  //       "defensiveAerials": 16,
  //       "interceptions": 13,
  //       "touches": 571,
  //       "shotsOffTarget": 4,
  //       "tacklesTotal": 35,
  //       "dribblesWon": 5,
  //       "dribblesLost": 11,
  //       "shotsTotal": 7,
  //       "shotsBlocked": 2,
  //       "aerialsWon": 16,
  //       "clearances": 16,
  //       "dribblesAttempted": 16
  //     }
  //   },
  //   "team2": {
  //     "teamName": "Liverpool",
  //     "teamStats": {
  //       "cornersTotal": 5,
  //       "dribbledPast": 5,
  //       "tackleSuccessful": 19,
  //       "throwInsTotal": 22,
  //       "aerialsTotal": 37,
  //       "offensiveAerials": 16,
  //       "dispossessed": 16,
  //       "foulsCommited": 16,
  //       "passesTotal": 478,
  //       "offsidesCaught": 2,
  //       "shotsOnTarget": 3,
  //       "tackleUnsuccesful": 5,
  //       "defensiveAerials": 21,
  //       "interceptions": 13,
  //       "touches": 642,
  //       "shotsOffTarget": 1,
  //       "tacklesTotal": 24,
  //       "dribblesWon": 10,
  //       "dribblesLost": 9,
  //       "shotsTotal": 8,
  //       "shotsBlocked": 4,
  //       "aerialsWon": 21,
  //       "clearances": 33,
  //       "dribblesAttempted": 19
  //     }
  //   }
  // }
  
  
  export default CompareTeamsDribble

