import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const main = css`
  background-color: white;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  padding: 10px;
`;

const sizer = (height, width) => css`
  height: ${height};
  width: ${width};
`;

const button = css`
  position: absolute;
  color: #a3a3a3;
  top: 10px;
  right: 10px;
  border: solid #ededed 2px;
  border-radius: 50%;
  padding: 10px;
`;


@observer
export class Modal extends Component {
  render() {
    const { children, className, width, height } = this.props;

    return (
      <div className={cx(main, className, sizer(height, width))}>
        {children}

        <span className={button} onClick={this.props.close}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
    );
  }
}