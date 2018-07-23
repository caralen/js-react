import { post } from "./api";

export function login(state) {
    return post('users/sessions', {
        email: state.username,
        password: state.password
    })
        .then((data) => {
            localStorage.setItem('token', data.token)
            localStorage.setItem('username', state.username)
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