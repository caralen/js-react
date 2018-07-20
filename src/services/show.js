import { get } from './api';

export function getAll(state) {
    get('shows')
        .then((data) => state.shows.replace(data))
        .catch((error) => console.log(error));
}

export function getDetails(state, showId) {
    get(`shows/${showId}`)
        .then((data) => state.showDetails = data)
        .catch((error) => console.log(error));
}

export function getEpisodes(state, showId) {
    get(`shows/${showId}/episodes`)
        .then((data) => state.showEpisodes.replace(data))
        .catch((error) => console.log(error));
}