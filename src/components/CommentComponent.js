import React, {Component} from 'react';
import { css } from 'emotion';

import avatar from '../pictures/avatar.png';

const container = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 4fr;
    grid-template-rows: 1fr 1fr;
`;

const picture = css`
    grid-column: 1;
    grid-row: 1 / 3;
    width: 80%;
    align-self: center;
    text-color: black;
`;

const name = css`
    grid-column: 2;
    grid-row: 1;
    color: #ff758c;
`;

const time = css`
    grid-column: 3;
    grid-row: 1;
    color: #b7b7b7;
`;

const description = css`
    grid-column: 2 / 5;
    grid-row: 2;
`;

export class CommentComponent extends Component {

    render() {
        const { comment } = this.props;

        return(
            <div className={container}>
                <img className={picture} src={avatar} alt="avatar"></img>
                <p className={name}>Title</p>
                <p className={time}>1min</p>
                <p className={description}>{comment.text}</p>
            </div>
        );
    }
}