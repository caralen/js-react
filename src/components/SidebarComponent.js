import React, { Component } from 'react';
import {css} from 'emotion';
import { Link } from 'react-router-dom';

import placeholder from '../pictures/placeholder.png';

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
    color: #3a3a3a;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ededed;
    border-radius: 20px;
    border: none;
`;

export class SidebarComponent extends Component {

    render(){
        return(
            <div className={container}>
                <div>
                    <button className={button}>Add episode</button>
                    <button className={button}>Favorite</button>
                </div>

                <img src={placeholder} alt="placeholder" height="320" width="250" />

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