import { get } from './api';
import { post } from './api';
import state from '../state';
import { runInAction } from 'mobx';

export async function getEpisode(episodeId) {
    const data = await get(`episodes/${episodeId}`);
    runInAction(() => {
        state.currentEpisode = data;
    });
}

export async function getComments(episodeId) {
    const data = await get(`episodes/${episodeId}/comments`);
    runInAction(() => {
        state.comments.replace(data);
    });
}

export async function createComment(episodeId, text) {
    await post(`comments`, {
        text: text,
        episodeId: episodeId
    });
    getComments(episodeId);
}