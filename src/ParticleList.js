import React, { Component } from 'react';
import ParticleListItem from './ParticleListItem.js';

export default class ParticleList extends Component {
    render() {
        return (
            <div>
                {console.log("I am here ...")}
                {this.props.data.map(item => {
                    return <ParticleListItem particle={item} />
                })}
            </div>
        )
    }
}