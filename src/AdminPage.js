import React, { Component } from 'react';
import request from 'superagent';
import './App.css';

// import { render } from '@testing-library/react';

export default class AdminPage extends Component {
    state = {
            name: '',
            moons: '0',
            rings: false,
            type: '',
            owner_id: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const newPlanet = await request.post('http://localhost:3001/planets', {
            name: this.state.name,
            moons: this.state.moons,
            rings: this.state.rings,
            type: this.state.type,
            owner_id: this.state.owner_id
        })

        console.log('newPlanet')
    }

    handelGeneralChange = (e) => {
        // next three lines can be reduced to this.setState({ [e.target.name]: e.target.value });
        const newState = {};
        // next line can be destructured to const { target: { name, value } } = e;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    
    render() {
        console.log(this.state.form)

        return (
            <div className="admin_container">
                <form onSubmit={this.handleSubmit}>
                    <h1>A Smattering of Planets</h1>
                    <label>
                        Planet Name 
                        <input onChange={this.handleGeneralChange} value={this.state.name} name="name" />
                    </label>
                    <label>
                        Number of Moons 
                        <input onChange={this.handleGeneralChange} value={this.state.moons} name="moons" type="number" />
                    </label>
                    <label>
                        Rings ?
                        <input onChange={this.handleGeneralChange} checked={this.state.rings === 'false'} name="rings" type="radio" value="false" />
                    </label>
                    <label>
                        Planet Type 
                        <input onChange={this.handleGeneralChange} value={this.state.type} name="type" />
                    </label>
                    <label>
                        Owner ID 
                        <input onChange={this.handleGeneralChange} value={this.state.owner_id} name="owner_Id" />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}