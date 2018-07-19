import React, { Component } from 'react';
import {css} from 'emotion';

import logo from '../pictures/logo.png';

const container = css`
    display: grid;
    grid-template-columns: 1fr 7fr 1fr 1fr;
`;

const image = css`
    grid-column: 2;
    align-self: center;
`;

const p = css`
    grid-column: 3 / 5;
    align-self: center;
`;


export class HeaderComponent extends Component {
    
    render() {
        const username = localStorage.getItem('username');

        return(
            <div className={container}>
                <img className={image} src={logo} alt="logo" width="120" height="30" />
                <p className={p}>Hi, {username}</p>
            </div>
        );
    }
}