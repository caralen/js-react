import state from '../state';

export function get(model) {
    return fetch(`https://api.infinum.academy/api/${model}`)
        .then((res) => res.json())
        .then((res) => res.data);
}

export function post(model, parameter) {
    return fetch(`https://api.infinum.academy/api/${model}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': state.token ? state.token : localStorage.getItem('token'),
        },
        body: JSON.stringify(parameter)
    })
        .then((res) => res.json())
        .then((res) => res.data);
}

export function uploadPost(model, data) {
    console.log(model);
    console.log(data);
    console.log(state.rememberMe);
    console.log(localStorage.getItem('token'));

    return fetch(`https://api.infinum.academy/api/${model}`, {
        method: 'POST',
        headers: {
          'Authorization': state.token ? state.token : localStorage.getItem('token'),
        },
        body: data
      })
        .then((res) => res.json())
        .then((res) => res.data);
}