import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Planets from './Planets.js';
import About from './About.js';
import PlanetDetail from './PlanetDetail.js';
import AdminPage from './AdminPage.js';
import './App.css';
import Particles from './Particles.js';
import ParticleDetail from './ParticleDetail.js';


export default class App extends Component {
    render() {
        return (
            <div className="container">
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
                            path='/Particles'
                            exact
                            render={(routerProps) => <Particles {...routerProps} />} 
                        />
                        <Route 
                            path='/Particles/:Particle'
                            render={(routerProps) => <ParticleDetail {...routerProps} />} 
                        />
                        <Route 
                            path='/about'
                            render={(routerProps) => <About {...routerProps} />} 
                        />
                        <Route 
                            path='/admin'
                            render={(routerProps) => <AdminPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}