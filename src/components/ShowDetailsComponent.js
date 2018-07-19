import React, { Component } from 'react';

export class ShowDetailsComponent extends Component {
    render() {
        const { details } = this.props;

        return(
            <div>
                <h1>{details.title}</h1>
                <p>{details.description}</p>
            </div>

        );
    }
}