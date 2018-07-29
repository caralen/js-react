import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {css} from 'emotion';
import { observer } from 'mobx-react';

const link = css`
    color: #3a3a3a;
    text-decoration: none;
`;

@observer
export class ShowComponent extends Component {
    render() {
        const { show, pictureSrc, linkTo } = this.props;

        return(
            <div>
               {
                show.imageId
                ? <p>Image id</p>
                : <img src={pictureSrc} alt="showImage" height="250" width="190" />
               } 

                <br/>
                <Link className={link} to={linkTo}>{show.title}</Link>
            </div>
        );
    }
}