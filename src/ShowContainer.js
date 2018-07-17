import React, { Component } from 'react';
import { ShowDetailsComponent } from './ShowDetailsComponent';
import { ShowEpisodeComponent } from './ShowEpisodeComponent';

export class ShowContainer extends Component {
    
    constructor(args) {
        super(args);
        
        this.showId = this.props.match.params;
    
        this.state = {
            showDetails: {},
            showEpisodes: [],
        };
    }

    componentDidMount() {
        fetch(`https://api.infinum.academy/api/shows/${this.showId.showsId}`)
            .then((data) => data.json())
            .then((response) => this.setState({ showDetails: response.data }))
            .catch(() => console.log("Error"));

        fetch(`https://api.infinum.academy/api/shows/${this.showId.showsId}/episodes`)
            .then((data) => data.json())
            .then((response) => this.setState({ showEpisodes: response.data }))
            .catch(() => console.log("Error"));
    }


    render() {
        return (
            <ul>
                {
                    <ShowDetailsComponent details={this.state.showDetails} />
                }
                {
                    this.state.showEpisodes.map((episode) => (
                        <ShowEpisodeComponent key={episode._id} episode={episode} />
                    ))
                }
            </ul>
        );
    }
}