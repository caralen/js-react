import React, {Component} from 'react';
import {css} from 'emotion';

import logo from './pictures/logo.png';
import passwordLogo from './pictures/show-password.png';

const container = css`
    display: grid;
    grid-template-columns: 25% auto 25%;
    grid-template-rows: 40px 100px 250px 100px;
    justify-items: start;
`;

const header = css`
    grid-column: 2;
    grid-row: 1;
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

export class RegisterContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._register = this._register.bind(this);
    }

    _handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    _handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    _register() {
        fetch('https://api.infinum.academy/api/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password
            })
        })
            .then(() => {
                this._redirect();
            })
            .catch((error) => console.log(error));
        }
        
    _redirect() {
        this.props.history.push("/")
    }

    render() {
        return(
            <div className={container}>

                <div className={header}>
                    <img src={logo} alt="logo" width="120" height="30" />
                </div>

                <div className={formContainer}>

                    <div>
                        <label className={customLabel} htmlFor="username">My username will be</label>
                        <br />
                        <input className={customInput} type="text" id="username" value={this.state.username} onChange={this._handleUsernameChange} />
                    </div>

                    <div>
                        <label className={customLabel} htmlFor="password">and my password will be</label>
                        <div>
                            <input className={customInput} type="password" id="password" value={this.state.password} onChange={this._handlePasswordChange} />
                            <img alt="eye" src={passwordLogo} width="20" height="20"/>
                        </div>
                    </div>

                    <button className={button} onClick={this._register}>Register</button>

                </div>

            </div>
        );
    }
}