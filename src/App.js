import React from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './components/HomePage'
//require('dotenv').config()
//import CompareTeams from './components/compareTeams'


class Routes extends React.Component{
    render(){
        return(
            <Router>
            <Switch>
                <Route path ='/home' component = {HomePage}/>
                {/* <Route path = '/compareteams' component = {CompareTeams}/> */}
                {/* <Route path= "/home" component = {HomePage}/> */}
            </Switch>
            </Router>
        )
    }
}

export default Routes;


