import { get } from './api';
import state from '../state';

export function getAll() {
    get('shows')
        .then((data) => state.shows.replace(data))
        .catch((error) => console.log(error));
}

export function getDetails(showId) {
    get(`shows/${showId}`)
        .then((data) => state.showDetails = data)
        .catch((error) => console.log(error));
}

export function getEpisodes(showId) {
    get(`shows/${showId}/episodes`)
        .then((data) => state.showEpisodes.replace(data))
        .catch((error) => console.log(error));
}