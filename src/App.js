import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Planets from './Planets.js';
import About from './About.js';
import PlanetDetail from './PlanetDetail.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path='/'
                            exact
                            render={(routerProps) => <Planets {...routerProps} />} 
                        />
                        <Route 
                            path='/Planets/:Planet'
                            render={(routerProps) => <PlanetDetail {...routerProps} />} 
                        />
                        <Route 
                            path='/about'
                            render={(routerProps) => <About {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}