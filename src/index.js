import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { App } from './containers/App';
import { ShowContainer } from './containers/ShowContainer';
import { LoginContainer } from './containers/LoginContainer';
import { RegisterContainer } from './containers/RegisterContainer';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={ LoginContainer } />
            <Route exact path="/register" component={ RegisterContainer } />
            <Route exact path="/shows" component={ App } />
            <Route exact path="/shows/:showsId" component={ ShowContainer } />
        </div>
    </BrowserRouter>
), document.querySelector('.js-app'));
