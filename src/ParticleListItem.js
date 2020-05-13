import React, { Component } from 'react';

export default class ParticleListItem extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.particle.name}</h2>
                <h3>Moons: {this.props.particle.family}</h3>
                <h3>Rings: {String(this.props.particle.discovered)}</h3>
                <h3>Type: {this.props.particle.charge}</h3>
            </div>
        )
    }
}