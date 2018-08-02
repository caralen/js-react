import React, { Component } from 'react';
import { css, cx } from 'emotion';
import { observer } from 'mobx-react';
import placeholder from '../pictures/placeholder_landscape.png'

const container = css`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr auto 0.1fr;
    grid-gap: 10px;
`;

const image = css`
    grid-column: 1;
    grid-row: 1 / 3;
    align-self: center;
    cursor: pointer;
`;

const title = css`
    grid-row: 1;
    grid-column: 2;
    color: black;
    cursor: pointer;
`;

const description = css`
    grid-row: 2;
    grid-column: 2;
`;


@observer
export class ShowEpisodeComponent extends Component {

    render() {
        const { episode, pictureSrc, onClick } = this.props;

        return(
            <div className={container}>
                <img 
                    className={cx(image, css({'&:hover': {opacity: '0.5'}}))} 
                    src={episode.imageUrl ? pictureSrc : placeholder} 
                    onClick={onClick} 
                    alt="placeholder" 
                    height="120" 
                    width="200" 
                />

                <h4 className={title} onClick={onClick}>{episode.title}</h4>
                
                <p className={description}>{episode.description}</p>
            </div>
        );
    }
}