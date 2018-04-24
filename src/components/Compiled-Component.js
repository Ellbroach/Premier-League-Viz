// var d3 = require('d3');
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         //players: arsenalPlayers,
//         playerPerformance: ramseyPerformance
//       }
//       // this.fetchPlayerData = this.fetchPlayerData.bind(this)
//       // this.fetchMatchData = this.fetchMatchData.bind(this)
//   }
//   render() {
//     console.log(this.state)
//     return (
//       <div className="App">
//       <PieChart/>
//       <div>
//         {this.state.players.map((player)=> 
//         <h2>{player.playerName}</h2>)}
//       </div>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Premier League Visualizer</h1>
//         </header>
//         <p className="App-intro">
//         </p>
//       </div>
//     );
//   }
// }

// class Arc extends React.Component {
//     constructor() {
//         super();
//         this.arc = d3.svg.arc()
//     }
 
//     componentWillMount() {
//         this.updateD3(this.props);
//     }
 
//     componentWillReceiveProps(newProps) {
//         this.updateD3(newProps);
//     }
 
//     updateD3(newProps) {
//         this.arc.innerRadius(newProps.innerRadius)
//         this.arc.outerRadius(newProps.outerRadius)
//     }
 
//     render() {
//         return(
//             <path d={this.arc(this.props.data)}
//             style={{fill: this.props.color}}></path>
//         )
//     }
// }




// class PieChart extends React.Component {
//     constructor() {
//         super()
//         this.pie = d3.layout.pie()
//             .value((d) => d.value)
//         this.colors = d3.scale.category10()
//     }
 
//     arcGenerator(d, i) {
//       return (
//         <Arc key={`arc-${i}`}
//                     data={d}
//                     innerRadius={this.props.innerRadius}
//                     outerRadius={this.props.outerRadius}
//                     color={this.colors(i)} />
//     );
//     }
 
//     render() {
//       let pie = this.pie(this.props.data),
//           translate = `translate(${this.props.x}, ${this.props.y})`;

//       return (
//           <g transform={translate}>
//               {pie.map((d, i) => this.arcGenerator(d, i))}
//           </g>
//       )
//   }
// }

// const ramseyPerformance = {
//     isFirstEleven: true,
//     isManOfTheMatch: false,
//     name: "Aaron Ramsey",
//     position: "MC",
//     shirtNo: "8",
//     assists
//       :
//       2,
//     crossesTotal
//       :
//       1,
//     dispossessed
//       :
//       2,
//     dribbledPast
//       :
//       1,
//     foulsCommited
//       :
//       2,
//     foulsWon
//       :
//       2,
//     goals
//       :
//       1,
//     subbedIn
//       :
//       0,
//     subbedOut
//       :
//       90,
//     passesSuccessful
//       :
//       44,
//     passesTotal
//       :
//       50,
//     possessionMins
//       :
//       4,
//     shotsOffTarget
//       :
//       2,
//     shotsOnTarget
//       :
//       5,
//     shotsTotal
//       :
//       7,
//     tackleSuccessful
//       :
//       1,
//     tackleUnsuccesful
//       :
//       1,
//     tacklesTotal
//       :
//       2,
//     throwInsTotal
//       :
//       1,
//     touches
//       :
//       69
//   }


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
