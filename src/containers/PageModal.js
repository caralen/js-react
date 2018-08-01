import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import Dropzone from 'react-dropzone';
import { Modal } from '../components/Modal';
import { createEpisode } from '../services/episode';
import { uploadFile } from '../services/episode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const main = css`
  display: grid;
  justify-items: center;
  position: absolute;
  top: 20%;
  right: 35%;
`;

const box = css`
  position: absolute;
  background-color: grey;
  height: 1000%;
  width: 100%;
  top: 0;
  right: 0;
  opacity: 0.9;
`;

const text = css`
  border: none;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #a3a3a3;
  outline: none;
  border-bottom: 1px solid #e5e5e5;
`;

const button = css`
  justify-self: end;
  color: white;
  background-color: #ff758c;
  border: none;
  border-radius: 5px;
  padding: 10px 70px;
`;

const label = css`
  border: none;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #a3a3a3;
  outline: none;
`;

const select = css`
  border: none;
  border-bottom: 1px solid #e5e5e5;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ff758c;
  outline: none;
`;

const camera = css`
  color: #ff758c;
  text-align: center;
  padding-top: 20px;
`;

const textGrey = css`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #a3a3a3;
  text-align: center;
`;

const textPink = css`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ff758c;
  text-align: center;
`;

@observer
export class PageModal extends Component {

  @observable
  componentState = {
    showId: this.props.match.params.showsId,
    mediaId: '',
    title: '',
    description: '',
    episodeNumber: '1',
    season: '1',
  };

  @action.bound
  _onInputChange(fieldName) {
    return action((event) => {
      this.componentState[fieldName] = event.target.value;
    });
  }

  @action.bound
  _closeModal() {
    this.props.history.push('./');
  }

  @action.bound
  _onDrop(files) {
    const data = new FormData();
    data.append('file', files[0]);
    uploadFile(data)
      .then((res) => this.componentState.mediaId = res._id);
  }

  @action.bound
  _submitForm(event) {
    event.preventDefault();
    createEpisode(this.componentState)
      .then(this._closeModal);
  }

  render() {
    return (
      <div>
        <div className={box}>
        </div>
        <Modal className={main} width="30%" height="70%" close={this._closeModal}>
          <div>
            <h1>Add new episode</h1>

            <form onSubmit={this._submitForm}>

              <Dropzone onDrop={this._onDrop}>
                <div className={camera}>
                  <FontAwesomeIcon icon={faCamera} size="2x" />
                </div>
                <p className={textGrey}>Drag your image here or</p>
                <p className={textPink}>browse</p>
              </Dropzone>

              <br/><br/>

              <input 
                className={text} 
                type="text" 
                placeholder="Episode title" 
                onChange={this._onInputChange('title')}
                value={this.componentState.title}
              />

              <br/><br/>

              <label className={label}>Season: </label>

              <select 
                className={select} 
                id="season-select" 
                value={this.componentState.season} 
                onChange={this._onInputChange('season')}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>

              <label>  </label>

              <label className={label}>Episode: </label>

              <select 
                className={select} 
                id="episode-select" 
                value={this.componentState.episodeNumber} 
                onChange={this._onInputChange('episodeNumber')}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>  
              </select>

              <br/><br/>

              <input 
                className={text} 
                type="text" 
                placeholder="Episode description"
                onChange={this._onInputChange('description')}
                value={this.componentState.description}
              />

              <br/><br/>

              <input className={button} type="submit" value="Add new episode"></input>
            </form>
          </div>

      </Modal>
      </div>
    );
  }
}