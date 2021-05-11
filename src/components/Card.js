import React, { Component } from 'react'

export default class Card extends Component {

    render() {
        return (
            <div className="card">
            <h3>{this.props.users.name}</h3>
                <p>{this.props.users.username}</p>
                <p>{this.props.users.email}</p>
                <p>{this.props.users.website}</p>
                <p>{this.props.users.company.name}</p>
                <p>{this.props.users.address.city}</p>
        </div>
        )
    }
}
