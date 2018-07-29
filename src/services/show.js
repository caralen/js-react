import { get } from './api';
import { post } from './api';
import state from '../state';
import { runInAction } from 'mobx';

export async function getAll() {
    const shows = await get('shows');
    runInAction(() => {
        state.shows.replace(shows);
    });
}

export async function getDetails(showId) {
    const showDetails = await get(`shows/${showId}`);
    runInAction(() => {
        state.showDetails = showDetails;
    });
}

export async function getEpisodes(showId) {
    const showEpisodes = await get(`shows/${showId}/episodes`);
    runInAction(() => {
        state.showEpisodes.replace(showEpisodes);
    });
}

export async function likeShow(showId) {
    await post(`shows/${showId}/like`);
    getDetails(showId);
}

export async function dislikeShow(showId) {
    await post(`shows/${showId}/dislike`);
    getDetails(showId);
}