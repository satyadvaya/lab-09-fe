import React, { Component } from 'react';
import request from 'superagent';

export default class PlanetDetail extends Component {
    state = { planet: {} }
    componentDidMount = async () => {
        const fetchedData = await request.get(`http://localhost:3002/planets/${this.props.match.params.id}`)

        console.log(fetchedData.body);

        this.setState({ planet: fetchedData.body })
    }
    render() {
        return (
            <div>
                detail
                <div>
                    {this.state.planet
                    ? JSON.stringify(this.state.planet)
                    : 'LOADING'}
                </div>
            </div>
        )
    }
}
