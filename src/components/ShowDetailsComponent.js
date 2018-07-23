import React, { Component } from 'react';
import {css} from 'emotion';

const titleContainer = css`
    display: grid;
    grid-template-columns: 1fr 0.1fr 0.1fr 1fr;
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
`;

const buttonDislike = css`
    grid-column: 3;
    grid-row: 2;
    background-color: #ededed;
    border-radius: 20px;
    border: none;
`;

export class ShowDetailsComponent extends Component {
    render() {
        const { details } = this.props;

        return(
            <div>
                <div className={titleContainer}>
                    <h1 className={title}>{details.title}</h1>
                    <button className={buttonLike}>Like</button>
                    <button className={buttonDislike}>Dislike</button>
                </div>
                <p>{details.description}</p>
            </div>

        );
    }
}