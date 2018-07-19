import React, { Component } from 'react';
import { ShowDetailsComponent } from './components/ShowDetailsComponent';
import { ShowEpisodeComponent } from './components/ShowEpisodeComponent';

export class ShowContainer extends Component {
    
    constructor(args) {
        super(args);
        
        this.showId = this.props.match.params.showsId;
    
        this.state = {
            showDetails: {},
            showEpisodes: [],
        };
    }

    componentDidMount() {

        fetch(`https://api.infinum.academy/api/shows/${this.showId}`)
            .then((data) => data.json())
            .then((response) => this.setState({ showDetails: response.data }))
            .catch((error) => console.log(error));

        fetch(`https://api.infinum.academy/api/shows/${this.showId}/episodes`)
            .then((data) => data.json())
            .then((response) => this.setState({ showEpisodes: response.data }))
            .catch((error) => console.log(error));
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