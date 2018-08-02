import React, {Component} from 'react';
import { css, cx } from 'emotion';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { register as registerUser } from '../services/user';

import logo from '../pictures/logo.png';
import passwordLogo from '../pictures/show-password.png';

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
    cursor: pointer;
`;

@observer
export class RegisterContainer extends Component {

    @observable
    componentState = {
        username: '',
        password: '',
        showPassword: false,
    }

    @action.bound
    _onInputChange(fieldName) {
        return action((event) => {
        this.componentState[fieldName] = event.target.value;
        });
    }

    @action.bound
    _toggleShowPassword() {
        this.componentState.showPassword = !this.componentState.showPassword;
    }

    @action.bound
    _register(event) {
        event.preventDefault();
        
        registerUser(this.componentState);
        this._redirect();
    }

    @action.bound
    _redirect() {
        this.props.history.push("/")
    }

    render() {
        return(
            <div className={container}>

                <div className={header}>
                    <img src={logo} alt="logo" width="120" height="30" />
                </div>

                <form className={formContainer} onSubmit={this._register}>

                    <div>
                        <label className={customLabel} htmlFor="username">My username will be</label>
                        <br />
                        <input 
                            className={customInput} 
                            type={"text"} 
                            id="username" 
                            value={this.componentState.username} 
                            onChange={this._onInputChange('username')} 
                        />
                    </div>

                    <div>
                        <label className={customLabel} htmlFor="password">and my password will be</label>
                        <div>
                            <input 
                                className={customInput} 
                                type={this.componentState.showPassword ? 'text' : 'password'} 
                                id="password" value={this.componentState.password} 
                                onChange={this._onInputChange('password')} 
                            />
                            <img alt="eye" src={passwordLogo} width="20" height="20" onClick={this._toggleShowPassword}/>
                        </div>
                    </div>

                    <input 
                        className={cx(button, css({'&:hover': {opacity: '0.5'}}))} 
                        type="button"
                        value="Register"
                    />

                </form>

            </div>
        );
    }
}