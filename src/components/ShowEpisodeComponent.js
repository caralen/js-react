import React, { Component } from 'react';

export class ShowEpisodeComponent extends Component {
    render() {
        const { episode } = this.props;

        return(
            <li>
                <h2>{episode.title}</h2>
                <p>{episode.description}</p>
            </li>
        );
    }
}