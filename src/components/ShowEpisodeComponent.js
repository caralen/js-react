import React, { Component } from 'react';
import {css} from 'emotion';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

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

const description = css`
    grid-row: 2;
    grid-column: 2;
`;

const link = css`
    grid-row: 1;
    grid-column: 2;
    color: black;
    text-decoration: none;
`;

@observer
export class ShowEpisodeComponent extends Component {

    render() {
        const { episode, pictureSrc, linkTo } = this.props;

        return(
            <div className={container}>
                <img className={image} src={pictureSrc} alt="placeholder" height="120" width="200" />
                <Link className={link} to={linkTo}>{episode.title}</Link>
                <p className={description}>{episode.description}</p>
                <br />
            </div>
        );
    }
}