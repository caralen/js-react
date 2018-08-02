import React, {Component} from 'react';
import { css } from 'emotion';
import { observable, action } from 'mobx';
import { observer, inject  } from 'mobx-react';
import { FooterComponent } from '../components/FooterComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { getEpisode } from '../services/episode';
import { getComments } from '../services/episode';
import { CommentComponent } from '../components/CommentComponent';
import { createComment } from '../services/episode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import placeholder from '../pictures/placeholder_landscape.png'

const container = css`
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 2fr 1fr 1fr;
    grid-template-rows: 0.1fr 3fr auto 0.1fr;
    grid-gap: 5px;
`;

const header = css`
    grid-column: 1 / 7;
    grid-row: 1;
    background-color: white;
`;

const footer = css`
    grid-column: 1 / 7;
    grid-row: 4;
    background-color: white;
`;

const pictureDiv = css`
    grid-column: 2 / 6;
    grid-row: 2;
    width: 1250px;
    height: 450px;
    justify-self: center;
`;

const picture = css`
    width: 100%;
    height: 100%;
`;

const detailsContainer = css`
    grid-column: 3;
    grid-row: 3;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
`;

const postComment = css`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr 2fr 0.8fr;
    grid-gap: 10px;
`;

const commentTitle = css`
    font-family: Arial, Helvetica, sans-serif;
    color: #ff758c;
`;

const commentArea = css`
    grid-column: 1 / 3;
    grid-row: 2;
    outline: none;
    resize: none;
    width: 100%;
    border-radius: 3px;
    border: none;
    background-color: #f2f2f2;
`;

const commentButton = css`
    grid-column: 2;
    grid-row: 3;
    color: white;
    background-color: #ff758c;
    border: none;
    outline: none;
    border-radius: 5px;
`;

const likesDiv = css`
    grid-column: 3;
    grid-row: 2;
    align-self: end;
    padding-bottom: 15px;
`;

const buttonLike = css`
    display: inline-block;
    background-color: #ff758c;
    color: white;
    border: solid #ededed 2px;
    border-radius: 15px;
    padding: 5px 20px;
    cursor: pointer;
`;

const likes = css`
    display: inline-block;
    background-color: white;
    border-radius: 50%;
    border: solid #ededed 2px;
    padding: 5px 10px;
`;

const buttonDislike = css`
    display: inline-block;
    background-color: white;
    color: black;
    border: solid #ededed 2px;
    border-radius: 15px;
    padding: 5px 20px;
    cursor: pointer;
`;

const text = css`
    font-family: Arial, Helvetica, sans-serif;
`;

const backButton = css`
    color: #ff758c;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    border: solid #ededed 1px;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
`;

const box = css`
    padding-top: 10px;
    grid-column: 2;
    grid-row: 2;
    justify-self: start;
    align-self: start;
`;


@inject("state")
@observer
export class EpisodeDetailsContainer extends Component {

    constructor(args) {
        super(args);
        
        this.episodeId = this.props.match.params.episodeId;
    }

    @observable
    componentState = {
        commentText: '',
    }

    componentDidMount() {
        getEpisode(this.episodeId);
        getComments(this.episodeId);
    }

    @action.bound
    _handleTextChange(event) {
        this.componentState.commentText = event.target.value;
    }

    @action.bound
    _redirectBack() {
        this.props.history.goBack();
    }

    @action.bound
    _createComment() {
        createComment(this.episodeId, this.componentState.commentText);
        this.componentState.commentText = '';
    }
    
    render() {
        return(
            <div className={container}>

                <div className={header}>
                    <HeaderComponent state={this.props.state} />
                </div>

                <div className={pictureDiv}>
                    <img 
                        className={picture} 
                        src={this.props.state.currentEpisode.imageUrl 
                            ? `https://api.infinum.academy${this.props.state.currentEpisode.imageUrl}` : placeholder} 
                        alt="placeholder"></img>
                </div>

                <div className={box}>
                    <div className={backButton} onClick={this._redirectBack}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </div>
                </div>

                <span className={likesDiv}>
                    <div className={buttonLike} >
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <div className={likes}>0</div>
                    <div className={buttonDislike} >
                        <FontAwesomeIcon icon={faThumbsDown}/>
                    </div>
                </span>


                <div className={detailsContainer}>

                    <div>
                        <h3 className={text}>{this.props.state.currentEpisode.title}</h3>
                        <p className={text}>{this.props.state.currentEpisode.description}</p>
                    </div>

                    <div className={postComment}>
                        <p className={commentTitle}>COMMENTS</p>
                        <textarea className={commentArea} onChange={this._handleTextChange} placeholder="Post a comment..." rows="4" cols="50"></textarea>
                        <br />
                        <button className={commentButton} onClick={this._createComment}>COMMENT</button>
                    </div>

                    <div>
                        {
                            this.props.state.comments.map((comment) => (
                                <CommentComponent key={comment._id} comment={comment}/>
                            ))
                        }
                    </div>
                </div>

                <div className={footer}>
                    <FooterComponent />
                </div>
            </div>
        );
    }
}