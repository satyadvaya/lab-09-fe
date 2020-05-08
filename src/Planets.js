import React, { Component } from 'react';
import request from 'superagent';
import List from './List.js';

export default class Planets extends Component {
    state = {
        loading: true
    }
    async componentDidMount() {
        
    console.log("Haylow world ...");
        const data = await request.get('https://stormy-meadow-96140.herokuapp.com/planets');
        this.setState({planets: data.body, loading: false});
    }
    render() {
        return (
            <div>
                {
                    this.state.loading ?
                    <h2>Loading</h2>
                    :
                    <List data={this.state.planets}/>
                }
            </div>
        )
    }
}