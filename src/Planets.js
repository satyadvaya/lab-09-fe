import React, { Component } from 'react';
import request from 'superagent';
import List from './List.js';

export default class Planets extends Component {
    state = {
        planets: [],
        loading: true
    }
    componentDidMount = async () => {
        try {
            const data = await request.get('https://stormy-meadow-96140.herokuapp.com/planets');
            // const data = await request.get('https://localhost:3002/planets');

            console.log('|| data', data)

            this.setState({planets: data.body, loading: false});
        } catch(e) {
            console.log(e);
        }

    }
    render() {
        return (
            <div>
                <h1>A Smattering of Planets</h1>
                {
                    this.state.loading
                    ? <h2>Loading</h2>
                    : <List data={this.state.planets}/>
                }
            </div>
        )
    }
}