import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.planet.name}</h1>
                <h3>Moons: {this.props.planet.moons}</h3>
                <h3>Rings: {String(this.props.planet.rings)}</h3>
                <h3>Type: {this.props.planet.type}</h3>
            </div>
        )
    }
}
