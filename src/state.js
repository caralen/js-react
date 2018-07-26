import { observable, computed } from 'mobx';

class State {

    @observable
    shows = [];

    @observable
    showDetails = {};

    @observable
    showEpisodes = [];

    @observable
    currentEpisode = '';

    @observable
    comments = [];

    @computed
    get username() {
        return localStorage.getItem('username');
    }

    @observable
    rememberedUsername = '';

    @observable
    rememberedPassword = '';
}

export default new State();