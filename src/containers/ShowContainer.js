import React, { Component } from 'react';
import {css} from 'emotion';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

import { ShowDetailsComponent } from '../components/ShowDetailsComponent';
import { ShowEpisodeComponent } from '../components/ShowEpisodeComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { SidebarComponent } from '../components/SidebarComponent';
import { getDetails as getShowDetails } from '../services/show';
import { getEpisodes as getShowEpisodes } from '../services/show';
import { likeShow } from '../services/show';
import { dislikeShow } from '../services/show';

const container = css`
    display: grid;
    grid-template-columns: 1fr 4fr 2fr 1fr;
    grid-template-rows: 1fr 1fr auto auto 1fr;
    background-color: #f7f7f7;
`;

const detailsContainer = css`
    grid-column: 2;
    grid-row: 3;
    display: grid;
    grid-template-rows: repeat(auto-fill, 250px);
`;

const episodesContainer = css`
    grid-column: 2;
    grid-row: 4;
    display: grid;
    grid-template-rows: repeat(auto-fill, 250px)
    grid-gap: 15px 10px;
`;

const sidebar = css`
    grid-column: 3;
    grid-row: 3 / 5;
`;

const header = css`
    grid-column: 1 / 5;
    grid-row: 1;
    background-color: white;
`;

const footer = css`
    grid-column: 1 / 5;
    grid-row: 7;
    background-color: white;
`;

const p = css`
    color: #ff758c;
    font-family: Arial, Helvetica, sans-serif;
`;

const backButton = css`
    grid-column: 1;
    grid-row: 2;
    justify-self: center;
    color: #ff758c;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ededed;
    border-radius: 100%;
    border: none;
`;

@inject("state")
@observer
export class ShowContainer extends Component {
    
    constructor(args) {
        super(args);
        
        this.showId = this.props.match.params.showsId;
    }

    componentDidMount() {
        getShowDetails(this.showId);
        getShowEpisodes(this.showId);
    }

    @action.bound
    _redirectBack() {
        this.props.history.push("/shows");
    }

    _like(showId) {
        likeShow(showId);
    }
    
    _dislike(showId) {
        dislikeShow(showId);
    }


    render() {
        return (
            <div className={container}>

                <div className={header}>
                    <HeaderComponent state={this.props.state} />
                </div>

                <button className={backButton} onClick={this._redirectBack}>Back</button>

                <div className={detailsContainer}>
                    <ShowDetailsComponent 
                        details={this.props.state.showDetails} 
                        like={this._like} 
                        dislike={this._dislike} 
                    />
                </div>

                <div className={sidebar}>
                    <SidebarComponent 
                        pictureSrc={`https://api.infinum.academy${this.props.state.showDetails.imageUrl}`}
                    />
                </div>

                <div className={episodesContainer}>
                    <p className={p}>SEASONS & EPISODES</p>
                    {
                        this.props.state.showEpisodes.map((episode) => (
                            <ShowEpisodeComponent 
                                key={episode._id} 
                                episode={episode}
                                pictureSrc={`https://api.infinum.academy${episode.imageUrl}`}
                                linkTo={`episodes/${episode._id}`} 
                            />
                        ))
                    }
                </div>

                <div className={footer}>
                    <FooterComponent />
                </div>
            </div>
        );
    }
}