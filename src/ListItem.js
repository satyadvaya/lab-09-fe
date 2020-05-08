import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.planet.name}</h3>
            </div>
        )
    }
}
