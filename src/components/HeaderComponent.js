import React, { Component } from 'react';
import {css} from 'emotion';
import { Link } from 'react-router-dom';
import { action } from 'mobx';

import logo from '../pictures/logo.png';

const container = css`
    display: grid;
    grid-template-columns: 1fr 7fr 2fr 1fr;
`;

const image = css`
    grid-column: 2;
    align-self: center;
`;

const p = css`
    grid-column: 3;
    align-self: center;
`;

const link = css`
    grid-column: 4;
    align-self: center;
    justify-self: end;
    color: #ff758c;
    text-decoration: none;
    padding-right: 20px;
`;


export class HeaderComponent extends Component {

    @action.bound
    _logout() {
        if(this.props.state.token){
            this.props.state.token = '';
            this.props.state.username = '';
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        }
    }
    
    render() {

        return(
            <div className={container}>
                <img className={image} src={logo} alt="logo" width="120" height="30" />
                <p className={p}>Hi, {this.props.state.token ? this.props.state.username : localStorage.getItem('username')}</p>
                <Link className={link} to='/' onClick={this._logout}>Logout</Link>
            </div>
        );
    }
}