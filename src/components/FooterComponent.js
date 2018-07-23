import React, { Component } from 'react';
import {css} from 'emotion';
import { Link } from 'react-router-dom';

import logo from '../pictures/logo.png';
import facebook from '../pictures/facebook.png';
import linkedin from '../pictures/linkedin.png';
import twitter from '../pictures/twitter.png';


const container = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 4fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`;

const icon = css`
    grid-column: 2;
    grid-row: 1;
    align-self: center;
`;

const about = css`
    grid-column: 2;
    grid-row: 2;
    text-decoration: none;
    color: grey;
`;

const privacy = css`
    grid-column: 3;
    grid-row: 2;
    text-decoration: none;
    color: grey;
`;

const terms = css`
    grid-column: 4;
    grid-row: 2;
    text-decoration: none;
    color: grey;
`;

const rights = css`
    grid-column: 2 / 6;
    grid-row: 3;
    color: grey;
`;

const icons = css`
    grid-column: 6;
    grid-row: 3;
    align-self: center;
`;

export class FooterComponent extends Component {

    render() {
        return(
            <div className={container}>
                <img className={icon} src={logo} alt="logo" width="100" height="25" />
                <Link className={about} to="/about">About Us</Link>
                <Link className={privacy} to="/privacy">Privacy Policy</Link>
                <Link className={terms} to="/terms">Terms of Service</Link>
                <p className={rights}>All rights reserved. Additional terms and conditions may apply</p>

                <div className={icons}>
                    <img src={facebook} alt="facebook" width="30" height="30" />
                    <img src={linkedin} alt="linkedin" width="30" height="30" />
                    <img src={twitter} alt="twitter" width="30" height="30" />
                </div>
            </div>
        );
    }
}