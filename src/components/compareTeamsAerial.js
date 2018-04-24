import React from 'react';
import { VictoryPie, VictoryContainer } from 'victory';

class CompareTeamsAerial extends React.Component {
    constructor(props){
      super(props)
      console.log(this.props.teamPerformances)
  }
  
    render() {

      const teams = this.props.teamPerformances
      const teamOneStats = this.props.teamPerformances.team1.teamStats
      const teamTwoStats = this.props.teamPerformances.team2.teamStats
     // console.log('TEAM ONE STATS', teams)
      const aerialDataTeamOne = [{x: 1, y: teamOneStats.offensiveAerials, label:`Offensive Aerials \n (${teamOneStats.offensiveAerials})` },
    {x:2, y: (teamOneStats.defensiveAerials), label:`Defenseive Aerials \n (${teamOneStats.defensiveAerials})`}]
    const aerialDataTeamTwo = [{x: 1, y: teamTwoStats.offensiveAerials, label:`Offensive Aerials \n (${teamTwoStats.offensiveAerials})` },
    {x:2, y: (teamTwoStats.defensiveAerials), label:`Defensive Aerials \n (${teamTwoStats.defensiveAerials})`}]
    //console.log(aerialDataTeamTwo)
      return (
  
        <div className = 'mainAerials'>
          <div className = 'homeAerials'>
          <h1>{`${teams.team1.teamName} Aerial Aggression`}</h1>
          <h3>{`${teamOneStats.aerialsTotal} Total Aerial Battles`}</h3>
          <VictoryPie
          cornerRadius={15}
          labelRadius={50}
          style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
          colorScale={["tomato", "orange"]}
          containerComponent ={<VictoryContainer responsive={false}/>}
          data = {aerialDataTeamOne}
          height= {500}
          width = {500}/>
          </div>
          <div className = 'awayAerials'>
          <h1>{`${teams.team2.teamName} Aerial Aggression`}</h1>
          <h3>{`${teamTwoStats.aerialsTotal} Total Aerial Battles`}</h3>
          <VictoryPie
          cornerRadius={15}
          labelRadius={50}
          style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
          colorScale={['#25297E', "green"]}
          containerComponent ={<VictoryContainer responsive={false}/>}
          data = {aerialDataTeamTwo}
          height= {500}
          width = {500}
          />
          </div>
          <div className = 'compareAerials'>
          <h1>{`${teams.team1.teamName} VS ${teams.team2.teamName} Aerial Comparison`}</h1>
          <VictoryPie
          cornerRadius={20}
          labelRadius={50}
          style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
          colorScale={[ "#25297E", "green"]}
          containerComponent ={<VictoryContainer responsive={false}/>}
          data = {[{x: 1, y: teamOneStats.aerialsWon, label:`${teams.team1.teamName} Aerial \n Battles Won \n (${teamOneStats.aerialsWon})`},
        {x:3, y: teamTwoStats.aerialsWon, label: `${teams.team2.teamName} Aerial \n Battles Won \n (${teamTwoStats.aerialsWon})`}
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
  
  
  export default CompareTeamsAerial

