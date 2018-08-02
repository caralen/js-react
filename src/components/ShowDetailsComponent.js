import React, { Component } from 'react';
import {css} from 'emotion';
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const titleContainer = css`
    display: grid;
    grid-template-columns: 1fr 0.1fr 0.1fr 0.1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
`;

const title = css`
    grid-column: 1;
    grid-row: 1 / 3;
`;

const buttonLike = css`
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: center;
    background-color: white;
    color: #ff758c;
    border: solid #ededed 2px;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
`;

const likes = css`
    justify-self: center;
    align-self: center;
    grid-column: 3;
    grid-row: 1 / 3;
    background-color: white;
    border-radius: 50%;
    border: solid #ededed 2px;
    height: 40px;
    padding: 0px 12px;
`;

const buttonDislike = css`
    grid-column: 4;
    grid-row: 1 / 3;
    align-self: center;
    background-color: white;
    color: #ff758c;
    border: solid #ededed 2px;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
`;

@observer
export class ShowDetailsComponent extends Component {

    render() {
        const { details, like, dislike } = this.props;
        
        return(
            <div>
                <div className={titleContainer}>
                    <h1 className={title}>{details.title}</h1>
                    <div className={buttonLike} onClick={() => like(details._id)} >
                        <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                    </div>
                    <span className={likes}>
                        <p>{details.likesCount}</p>
                    </span>
                    <div className={buttonDislike} onClick={() => dislike(details._id)} >
                        <FontAwesomeIcon icon={faThumbsDown} size="2x" />
                    </div>
                </div>
                <p>{details.description}</p>
            </div>

        );
    }
}