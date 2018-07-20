import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {css} from 'emotion';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { CheckboxComponent } from '../components/CheckboxComponent';

import { login as loginUser } from '../services/user';

import logo from '../pictures/logo.png';
import passwordLogo from '../pictures/show-password.png';

const container = css`
    display: grid;
    grid-template-columns: 25% auto 25%;
    grid-template-rows: 40px 100px 250px 100px 40px;
    justify-items: start;
`;

const header = css`
    grid-column: 2;
    grid-row: 1;
`;

const footer = css`
    grid-column: 2;
    grid-row: 5;
`;

const formContainer = css`
    grid-column: 2;
    grid-row: 3;
    display: grid;
    grid-template-rows: 2fr 2fr 1fr 1fr;
    justify-items: start;
`;

const customLabel = css`
    border: none;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    color: #3a3a3a;
`;

const customInput = css`
    border: none;
    outline: none;
    border-bottom: 1px solid #ff758c;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ff758c
`;

const button = css`
    grid-column: 1;
    color: white;
    background-color: #ff758c;
    border: none;
    border-radius: 5px;
    padding: 10px 70px;
`;

const link = css`
    color: #ff758c;
    text-decoration: none;
`;

@observer
export class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._login = this._login.bind(this);
        this._toggleShowPassword = this._toggleShowPassword.bind(this);
        this._redirect = this._redirect.bind(this);
    }

    @observable
    componentState = {
        username: '',
        password: '',
        showPassword: false,
    }
    
    _handleUsernameChange(event) {
        this.componentState.username = event.target.value
    }

    _handlePasswordChange(event) {
        this.componentState.password = event.target.value
    }

    _toggleShowPassword() {
        this.componentState.showPassword = !this.componentState.showPassword;
    }

    _login() {
        loginUser(this.componentState)
            .then(this._redirect);
    }

    _redirect() {
        this.props.history.push("/shows");
    }
    
    render() {
        return(
            <div className={container}>
                <div className={header}>
                    <img src={logo} alt="logo" width="120" height="30" />
                </div>

                <div className={formContainer}>

                    <div>
                        <label className={customLabel} htmlFor="username">My username is</label>
                        <br />
                        <input className={customInput} type="text" id="username" value={this.componentState.username} onChange={this._handleUsernameChange} />
                    </div>

                    <div>
                        <label className={customLabel} htmlFor="password">and my password is</label>
                        <div>
                            <input className={customInput} type={this.componentState.showPassword ? 'text' : 'password'} id="password" value={this.componentState.password} onChange={this._handlePasswordChange} />
                            <img alt="eye" src={passwordLogo} width="20" height="20" onClick={this._toggleShowPassword}/>
                        </div>
                    </div>

                    <CheckboxComponent />
                    <button className={button} onClick={this._login}>Login</button>

                </div>

                <div className={footer}>
                    Still don't have an account?  <Link className={link} to="/register">Register</Link>
                </div>

            </div>
        );
    }
}