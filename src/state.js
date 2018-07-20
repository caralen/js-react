import { observable } from 'mobx';

class State {

    @observable
    shows = [];

    @observable
    showDetails = {};

    @observable
    showEpisodes = [];
}

export default new State();