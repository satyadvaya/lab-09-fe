import React, { Component } from 'react'
import './App.css';

export default class AdminPage extends Component {
    render() {
        return (
            <div className="admin_container">
                <form>
                    <label>
                        Planet Name
                        <input name="name" />
                    </label>
                    <label>
                        Number of Moons
                        <input name="moons" type="number" />
                    </label>
                    <label>
                        Rings?
                        <input name="rings" type="radio" value="true" />
                    </label>
                    <label>
                        Planet Type
                        <input name="type" />
                    </label>
                    <label>
                        Owner ID
                        <input name="owner_id" />
                    </label>
                </form>
            </div>
        )
    }
}
