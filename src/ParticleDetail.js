import React, { Component } from 'react';
import request from 'superagent';
import getParticles from './api-calls.js';

export default class ParticleDetail extends Component {
    state = { particle: {} }
    componentDidMount = async () => {
        const fetchedData = await getParticles(this.props.match.params.id)

        console.log(fetchedData.body);

        this.setState({ particle: fetchedData })
    }
    render() {
        return (
            <div>
                detail
                <div>
                    {this.state.particle
                    ? JSON.stringify(this.state.particle)
                    : 'LOADING'}
                </div>
            </div>
        )
    }
}
