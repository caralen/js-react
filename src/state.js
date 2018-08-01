import { observable } from 'mobx';

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

    @observable
    token = '';

    @observable
    username = '';
}

export default new State();