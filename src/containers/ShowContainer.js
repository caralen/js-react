import React, { Component } from 'react';
import {css} from 'emotion';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import { ShowDetailsComponent } from '../components/ShowDetailsComponent';
import { ShowEpisodeComponent } from '../components/ShowEpisodeComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { SidebarComponent } from '../components/SidebarComponent';
import { getDetails as getShowDetails } from '../services/show';
import { getEpisodes as getShowEpisodes } from '../services/show';

import state from '../state';

const container = css`
    display: grid;
    grid-template-columns: 1fr 4fr 2fr 1fr;
    grid-template-rows: 1fr 1fr auto auto 1fr;
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


    render() {
        return (
            <div className={container}>

                <div className={header}>
                    <HeaderComponent />
                </div>

                <button className={backButton} onClick={this._redirectBack}>Back</button>

                <div className={detailsContainer}>
                    <ShowDetailsComponent details={state.showDetails} />
                </div>

                <div className={sidebar}>
                    <SidebarComponent />
                </div>

                <div className={episodesContainer}>
                    <p className={p}>SEASONS & EPISODES</p>
                    {
                        state.showEpisodes.map((episode) => (
                            <ShowEpisodeComponent key={episode._id} episode={episode} />
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