import React, { Component } from 'react';
import {css} from 'emotion';
import { observer, inject } from 'mobx-react';

import { ShowComponent } from '../components/ShowComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { getAll as getAllShows } from '../services/show';

const container = css`
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-template-rows: 1fr 1fr auto 0.5fr 1fr auto 1fr 2fr;
    background-color: #f7f7f7;
`;

const favouriteShowsContainer = css`
    grid-column: 2;
    grid-row: 3;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: repeat(auto-fill, 300px);
    grid-gap: 15px 10px;
`;

const allShowsContainer = css`
    grid-column: 2;
    grid-row: 6;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto-fill, 300px);
    grid-gap: 15px 10px;
`;

const favTitle = css`
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: #3a3a3a;
`;

const allTitle = css`
    grid-column: 2;
    grid-row: 5;
    align-self: center;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: #3a3a3a;
`;

const divider = css`
    grid-column: 2;
    grid-row: 4;
    align-self: end;
    height: 1px;
    background-color: #dddddd;
`;

const header = css`
    grid-column: 1 / 5;
    grid-row: 1;
    background-color: white;
`;

const footer = css`
    grid-column: 1 / 5;
    grid-row: 8;
    background-color: white;
`;

const link = css`
    color: #ff758c;
    text-decoration: none;
    font-size: 15px;
    padding: 15px;
`;

@inject("state")
@observer
export class App extends Component {

    componentDidMount() {
        getAllShows();
    }

    _onComponentClick(showId) {
        this.props.history.push(`/shows/${showId}`);
    }

    render() {
        return (

            <div className={container}>
                <div className={header}>
                    <HeaderComponent state={this.props.state} />
                </div>

                {
                    this.props.state.favoriteShowsNumber
                    ?
                    <div className={favTitle}>
                        <h2>
                            My favourite shows 
                            <a className={link} href="#see_all">See all</a>
                        </h2>
                    </div>
                    : null
                }

                {
                    this.props.state.favoriteShowsNumber
                    ?
                    <div className={favouriteShowsContainer}>
                        {
                            this.props.state.favoriteShows.map((show) => (
                                <ShowComponent
                                    key={show._id} 
                                    show={show} 
                                    pictureSrc={`https://api.infinum.academy${show.imageUrl}`}
                                    click={() => this._onComponentClick(show._id)}
                                />
                            ))
                        }
                    </div>
                    : null
                }

                <div className={divider}></div>
                
                <div className={allTitle}>
                    <h2>
                        <a id="see_all">All shows</a>
                    </h2>
                </div>
                

                <div className={allShowsContainer}>
                    {
                        this.props.state.shows.map((show) => (
                            <ShowComponent 
                                key={show._id} 
                                show={show} 
                                pictureSrc={`https://api.infinum.academy${show.imageUrl}`}
                                linkTo={`/shows/${show._id}`}
                                click={() => this._onComponentClick(show._id)}
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
