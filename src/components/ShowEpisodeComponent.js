import React, { Component } from 'react';
import {css} from 'emotion';
import { observer } from 'mobx-react';

import placeholder from '../pictures/placeholder_landscape.png'

const container = css`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr auto;
    grid-gap: 10px;
`;

const image = css`
    grid-column: 1;
    grid-row: 1 / 3;
    align-self: center;
`;

const title = css`
    grid-row: 1;
    grid-column: 2;
`;

const description = css`
    grid-row: 2;
    grid-column: 2;
`;

@observer
export class ShowEpisodeComponent extends Component {
    render() {
        const { episode } = this.props;

        return(
            <div className={container}>
                <img className={image} src={placeholder} alt="placeholder" height="120" width="200" />
                <h3 className={title}>{episode.title}</h3>
                <p className={description}>{episode.description}</p>
            </div>
        );
    }
}