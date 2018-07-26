import React, { Component } from 'react';
import {css} from 'emotion';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import { likeShow } from '../services/show';
import { dislikeShow } from '../services/show';

const titleContainer = css`
    display: grid;
    grid-template-columns: 1fr 0.1fr 0.1fr 0.1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5px;
`;

const title = css`
    grid-column: 1;
    grid-row: 1 / 4;
`;

const buttonLike = css`
    grid-column: 2;
    grid-row: 2;
    background-color: #ededed;
    border-radius: 20px;
    border: none;
    outline: none;
`;

const likes = css`
    grid-column: 3;
    grid-row: 2;
`;

const buttonDislike = css`
    grid-column: 4;
    grid-row: 2;
    background-color: #ededed;
    border-radius: 20px;
    border: none;
    outline: none;
`;

@observer
export class ShowDetailsComponent extends Component {

    @action.bound
    _like(showId) {
        likeShow(showId);
    }
    
    @action.bound
    _dislike(showId) {
        dislikeShow(showId);
    }


    render() {
        const { details } = this.props;

        return(
            <div>
                <div className={titleContainer}>
                    <h1 className={title}>{details.title}</h1>
                    <button className={buttonLike} onClick={() => this._like(details._id)}>Like</button>
                    <p className={likes}>{details.likesCount}</p>
                    <button className={buttonDislike} onClick={() => this._dislike(details._id)}>Dislike</button>
                </div>
                <p>{details.description}</p>
            </div>

        );
    }
}