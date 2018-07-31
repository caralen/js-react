import React, { Component } from 'react';
import {css} from 'emotion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const container = css`
    display: grid;
    grid-gap: 10px;
`;

const link = css`
    color: #ff758c;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
`;

const button = css`
    grid-column: 1;
    grid-row: 2;
    justify-self: center;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    border-radius: 20px;
    border: solid #ededed 1px;
    padding: 10px 2px;
`;

const circle = css`
    background-color: #ff758c;
    color: white;
    border-radius: 50%;
    padding: 3px;
`;

const text = css`
    padding: 5px;
`;

export class SidebarComponent extends Component {

    render() {
        return(
            <div className={container}>
                <div>

                    <div>
                    </div>
                    <button className={button} onClick={this.props.toggleModal}>
                        <span className={circle}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        <span className={text}>
                            Add episode
                        </span>
                    </button>
                    <button className={button}>
                        <span className={circle}>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className={text}>
                            Favorite
                        </span>
                    </button>
                </div>

                <img src={this.props.pictureSrc} alt="showImage" height="320" width="250" />

                <div>
                    <Link className={link} to="">Official Website</Link>
                    <br /><br />
                    <Link className={link} to="">Wikipedia</Link>
                    <br /><br />
                    <Link className={link} to="">IMDB</Link>
                </div>
            </div>
        )
    }

}