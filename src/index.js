import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ShowContainer } from './ShowContainer';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={ App } />
            <Route exact path="/shows/:showsId" component={ ShowContainer } />
        </div>
    </BrowserRouter>
), document.querySelector('.js-app'));
