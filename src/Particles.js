import React, { Component } from 'react';
import request from 'superagent';
import ParticleList from './ParticleList.js';

export default class Particles extends Component {
    state = {
        particles: [],
        loading: true
    }
    componentDidMount = async () => {
        try {
            const data = await request.get('https://stormy-meadow-96140.herokuapp.com/particles');
            // const data = await request.get('https://localhost:3002/planets');

            console.log('|| data', data)

            this.setState({particles: data.body, loading: false});
        } catch(e) {
            console.log(e);
        }

    }
    render() {
        return (
            <div>
                <h1>A Dusting of Particles</h1>
                {
                    this.state.loading
                    ? <h2>Loading</h2>
                    : <ParticleList data={this.state.particles}/>
                }
            </div>
        )
    }
}