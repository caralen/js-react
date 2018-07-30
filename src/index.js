import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { App } from './containers/App';
import { ShowContainer } from './containers/ShowContainer';
import { LoginContainer } from './containers/LoginContainer';
import { RegisterContainer } from './containers/RegisterContainer';
import { EpisodeDetailsContainer } from './containers/EpisodeDetailsContainer';
import { Provider } from 'mobx-react';
import { PageModal } from './containers/PageModal';

import state from './state';

import { configure } from 'mobx';
configure({ enforceActions: true });

ReactDOM.render((
    <Provider state={state}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ LoginContainer } />
                <Route exact path="/register" component={ RegisterContainer } />
                <Route exact path="/shows" component={ App } />
                <Route path="/shows/:showsId" component={ ShowContainer } />
                <Route path="/shows/:showsId/modal" component={PageModal} />
                <Route exact path="/shows/episodes/:episodeId" component={ EpisodeDetailsContainer } />
            </div>
        </BrowserRouter>
    </Provider>
), document.querySelector('.js-app'));
