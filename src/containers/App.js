import React, { Component } from 'react';
import {css} from 'emotion';
import { Link } from 'react-router-dom';
import { observer, inject  } from 'mobx-react';

import { ShowComponent } from '../components/ShowComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { getAll as getAllShows } from '../services/show';

const container = css`
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-template-rows: 1fr 1fr auto 1fr auto 1fr 2fr;
    background-color: #f7f7f7;
`;

const favouriteShowsContainer = css`
    grid-column: 2;
    grid-row: 3;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: repeat(auto-fill, 100px);
    grid-gap: 15px 10px;
`;

const allShowsContainer = css`
    grid-column: 2;
    grid-row: 5;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 15px 10px;
`;

const favTitle = css`
    grid-column: 2;
    grid-row: 2;
    align-self: center;
`;

const allTitle = css`
    grid-column: 2;
    grid-row: 4;
    align-self: center;
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

const link = css`
    color: #ff758c;
    text-decoration: none;
`;

@inject("state")
@observer
export class App extends Component {

    componentDidMount() {
        getAllShows();
    }

    render() {
        return (

            <div className={container}>
                <div className={header}>
                    <HeaderComponent state={this.props.state} />
                </div>

                <div className={favTitle}>
                    My favourite shows <Link className={link} to="/shows#AllShows">See all</Link>
                </div>

                <div className={favouriteShowsContainer}>
                    {
                        this.props.state.shows.map((show) => (
                            <ShowComponent 
                                key={show._id} 
                                show={show} 
                                pictureSrc={`https://api.infinum.academy${show.imageUrl}`}
                                linkTo={`/shows/${show._id}`}/>
                        ))
                    }
                </div>

                <div className={allTitle}>
                    All shows
                </div>

                <div className={allShowsContainer}>
                    {
                        this.props.state.shows.map((show) => (
                            <ShowComponent 
                                key={show._id} 
                                show={show} 
                                pictureSrc={`https://api.infinum.academy${show.imageUrl}`}
                                linkTo={`/shows/${show._id}`}
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
