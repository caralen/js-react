import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {css} from 'emotion';

import logo from './pictures/logo.png';
import passwordLogo from './pictures/show-password.png';

import { CheckboxComponent } from './components/CheckboxComponent';

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

export class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._login = this._login.bind(this);
    }

    _handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    _handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    _login() {
        fetch('https://api.infinum.academy/api/users/sessions', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem('token', data.data.token)
                localStorage.setItem('username', this.state.username)
            })
            .then(() => {
                this._redirect();
            })
            .catch((error) => console.log(error));
        }
        
    _redirect() {
        this.props.history.push("/shows")
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
                        <input className={customInput} type="text" id="username" value={this.state.username} onChange={this._handleUsernameChange} />
                    </div>

                    <div>
                        <label className={customLabel} htmlFor="password">and my password is</label>
                        <div>
                            <input className={customInput} type="password" id="password" value={this.state.password} onChange={this._handlePasswordChange} />
                            <img alt="eye" src={passwordLogo} width="20" height="20"/>
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