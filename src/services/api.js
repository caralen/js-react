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
            'Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify(parameter)
    })
        .then((res) => res.json())
        .then((res) => res.data);
}