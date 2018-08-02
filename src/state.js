import { observable, computed } from 'mobx';

class State {

    @observable
    shows = [];

    @observable
    favoriteShows = [];

    @computed
    get favoriteShowsNumber() {
      return this.favoriteShows.length;
    }

    @observable
    showDetails = {};

    @observable
    showEpisodes = [];

    @computed
    get episodesNumber() {
      return this.showEpisodes.length;
    }

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