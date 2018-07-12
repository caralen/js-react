import React, { Component } from 'react';

export default class App extends Component {
  constructor(args) {
    super(args);

    this.state = {
      shows: [],
      showDetails: [],
      showEpisodes: [],
    };
    this._onButtonClicked = this._onButtonClicked.bind(this);
    this._getShowDetails = this._getShowDetails.bind(this);
    this._getShowEpisodes = this._getShowEpisodes.bind(this);
  }

  _onButtonClicked() {
    fetch('https://api.infinum.academy/api/shows')
	    .then((data) => data.json())
	    .then((response) => this.setState({ shows: response.data }));
  }

  _getShowDetails(id) {
    fetch(`https://api.infinum.academy/api/shows/${id}`)
	    .then((data) => data.json())
      .then((response) => this.setState({ showDetails: response.data }));
      
    this._getShowEpisodes(id);
  }

  _getShowEpisodes(id) {
    fetch(`https://api.infinum.academy/api/shows/${id}/episodes`)
	    .then((data) => data.json())
	    .then((response) => this.setState({ showEpisodes: response.data }));
  }

  _randomColor() {
    const colors = ['blue', 'green', 'black'];
    const number = Math.round(Math.random() * 10);
    return colors[number % 3];
  }

  render() {

    return (
      <div>
        {
          this.state.shows.length === 0
            ? <button onClick={this._onButtonClicked} type="button">
                TV shows
              </button>
            : <p style={{color: 'red'}}>There are {this.state.shows.length} shows.</p>
        }

        
        {
          this.state.shows.map((show) => <button key={show._id} onClick={() => this._getShowDetails(show._id)} type="button">{show.title}</button>)
        }
        {
          <div> <p>{this.state.showDetails.title}</p> <p>{this.state.showDetails.description}</p> </div>
        }
        {
          this.state.showEpisodes.map((episode) => <div key={episode._id}> <br/><p>{episode.title}</p> <p>{episode.description}</p> </div>)
        }
        
      </div>
    );
  }
}
