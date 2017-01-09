'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory, IndexRedirect, browserHistory, IndexRoute} from 'react-router';
import Homepage from './containers/Homepage';
import Root from './components/Root';
import Room from './containers/Room';
import { enterRoom, roomNotFound } from './actions';
import EmptyPage from './components/EmptyPage';
import HomeFormTest from './components/HomeFormTest';

function onEnterConfirmRoom(nextState) {
	store.dispatch( enterRoom (nextState.params.roomId) );
	store.dispatch( roomNotFound(false) );
}

ReactDOM.render(
  <Provider store={store}>
	    <Router history={hashHistory}> 
	    	<Route component={Root}>
				<Route path="/" component={Homepage}/>
				<Route path="/:roomId" component={Room} onEnter={onEnterConfirmRoom}/>
				<Route path="/pageNotFound/error" component={EmptyPage}/>
				<Route path="/hometest/home" component={HomeFormTest}/>
				<IndexRoute component={Homepage}/>
			</Route>
	  	</Router>
  </Provider>,
  document.getElementById('app'));
