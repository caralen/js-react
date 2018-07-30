import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';

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
  top: 0;
  right: 0;
`;


@observer
export class Modal extends Component {
  render() {
    const { children, className, width, height } = this.props;

    return (
      <div className={cx(main, className, sizer(height, width))}>
        {children}
        <button
          className={button}
          onClick={this.props.close}
        >close</button>
      </div>
    );
  }
}