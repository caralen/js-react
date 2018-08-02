import React, { Component } from 'react';
import { css } from 'emotion';
import { observer } from 'mobx-react';

const container = css`
    cursor: pointer;
`;

const title = css`
    color: #3a3a3a;
`;

@observer
export class ShowComponent extends Component {
    render() {
        const { show, pictureSrc } = this.props;

        return(
            <div className={container} onClick={this.props.click}>
               {
                show.imageId
                ? <p>Image id</p>
                : <img className={css({'&:hover': {opacity: '0.5'}})} src={pictureSrc} alt="showImage" height="250" width="190" />
               } 

                <p className={title}>{show.title}</p>
            </div>
        );
    }
}