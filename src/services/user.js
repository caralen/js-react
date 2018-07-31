import { post } from "./api";
import state from '../state';

export function login(componentState) {
    return post('users/sessions', {
        email: componentState.username,
        password: componentState.password
    })
        .then((data) => {
            if(state.rememberMe){
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', componentState.username);
            } else{
                state.token = data.token;
                state.username = componentState.username;
            }
        })
        .catch((error) => console.log(error));
}

export function register(state) {
    post('users', {
        email: state.username,
        password: state.password
    })
        .catch((error) => console.log(error));
}