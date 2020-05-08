import React, { Component } from 'react';
import ListItem from './ListItem.js';

export default class List extends Component {
    render() {
        return (
            <div>
                {console.log("I am here ...")}
                {this.props.data.map(item => {
                    return <ListItem planet={item} />
                })}
            </div>
        )
    }
}
