import React from 'react';

import { render } from 'react-dom';

//Import css
import css from './styles/style.styl';

import Main from './component/Main.js';
import Single from './component/Single.js';
import PhotoGrid from './component/PhotoGrid.js';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
