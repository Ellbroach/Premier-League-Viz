

import React from 'react';
import { VictoryPie, VictoryContainer } from 'victory';

class CompareShots extends React.Component {
    constructor(props){
      super(props)
      console.log(this.props.teamPerformances)
  }
  
    render() {
        const teamOneStats = this.props.teamPerformances.team1.teamStats
        const teamTwoStats = this.props.teamPerformances.team2.teamStats
        const teams = this.props.teamPerformances
      const teamOneShotsData = [{x: 1, y: teamOneStats.shotsTotal, label:`Shots Total \n (${teamOneStats.shotsTotal})` },
    {x:2, y: (teamOneStats.shotsOnTarget), label:`Shots On Target \n (${teamOneStats.shotsOnTarget})`},
{x:3, y: (teamOneStats.shotsOffTarget), label: `Shots Off Target \n (${teamOneStats.shotsOffTarget})`},
{x:4, y: (teamOneStats.shotsBlocked), label: `Shots Blocked \n (${teamOneStats.shotsBlocked})`}]
    const teamTwoShotsData = [{x: 1, y: teamTwoStats.shotsTotal, label:`Shots Total \n (${teamTwoStats.shotsTotal})` },
    {x:2, y: (teamTwoStats.shotsOnTarget), label:`Shots On Target \n (${teamTwoStats.shotsOnTarget})`},
{x:3, y: (teamTwoStats.shotsOffTarget), label: `Shots Off Target \n (${teamTwoStats.shotsOffTarget})`},
{x:4, y: (teamTwoStats.shotsBlocked), label: `Shots Blocked \n (${teamTwoStats.shotsBlocked})`}]
    //console.log(teamTwoShotsData)
      return (
  
        <div className = 'mainAerials'>
          <div className = 'homeAerials'>
          <h1>{`${teams.team1.teamName} Shooting Efficiency`}</h1>
          <h3>{`${teamOneStats.aerialsTotal} Total Aerial Battles`}</h3>
          <VictoryPie
          cornerRadius={15}
          labelRadius={50}
          style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
          colorScale={["tomato", "orange",'#25297E','green']}
          containerComponent ={<VictoryContainer responsive={false}/>}
          data = {teamOneShotsData}
          height= {500}
          width = {500}/>
          </div>
          <div className = 'awayAerials'>
          <h1>{`${teams.team2.teamName} Shooting Efficiency`}</h1>
          <h3>{`${teamTwoStats.aerialsTotal} Total Aerial Battles`}</h3>
          <VictoryPie
          cornerRadius={15}
          labelRadius={50}
          style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
          colorScale={["tomato", "orange","green", "#25297E"]}
          containerComponent ={<VictoryContainer responsive={false}/>}
          data = {teamTwoShotsData}
          height= {500}
          width = {500}
          />
          </div>
          <div className = 'compareAerials'>
          <h1>{`${teams.team1.teamName} VS ${teams.team2.teamName}: Shots Total and On Target`}</h1>
          <VictoryPie
          cornerRadius={20}
          labelRadius={50}
          style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
          colorScale={["tomato", "orange", "Purple", "green"]}
          containerComponent ={<VictoryContainer responsive={false}/>}
          data = {[{x: 1, y: teamOneStats.shotsTotal, label:`${teams.team1.teamName}\n Shots Total  (${teamOneStats.shotsTotal})` },
          {x:2, y: (teamOneStats.shotsOnTarget), label:`${teams.team1.teamName} Shots \n On Target  (${teamOneStats.shotsOnTarget})`},
          {x: 3, y: teamTwoStats.shotsTotal, label:`${teams.team2.teamName} \n Shots Total (${teamTwoStats.shotsTotal})` },
          {x:4, y: (teamTwoStats.shotsOnTarget), label:`${teams.team2.teamName} Shots \n On Target  (${teamTwoStats.shotsOnTarget})`}]}
          height= {500}
          width = {500}
          />
          </div>
        </div>
      );
    }
  }

  export default CompareShots