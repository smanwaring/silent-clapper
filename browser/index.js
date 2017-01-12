'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory, IndexRedirect, browserHistory, IndexRoute} from 'react-router';



import Homepage from './containers/Homepage';
import Root from './components/Root';
import Room from './containers/Room';

//actions
import { enterRoom } from './actions/room-actions';
import { roomNotFound } from './actions/joinboardform-actions';
import { showPickButtonError } from './actions/createboard-actions';
import { stateCurrentBoard } from './actions/joinboardform-actions';

import EmptyPage from './components/EmptyPage';
import HomeFormTest from './components/HomeFormTest';


/*------ load the buttons for the room you are about to enter ------ */
function onEnterConfirmRoom(nextState) {
	store.dispatch( enterRoom (nextState.params.roomId) );
	store.dispatch( stateCurrentBoard(nextState.params.roomId));
	store.dispatch( roomNotFound(false) );
}

/*------ when you redirect back to the homepage, set the currentBoard state to empty/false lest you run into componentDidUpdate issues ------ */
function onEnterResetCurrentBoard() {
	store.dispatch( stateCurrentBoard(false) );
	store.dispatch( showPickButtonError(false) );
}

ReactDOM.render(
  <Provider store={store}>
	    <Router history={hashHistory}> 
	    	<Route component={Root}>
				<Route path="/" component={Homepage} onEnter={onEnterResetCurrentBoard}/>
				<Route path="/:roomId" component={Room} onEnter={onEnterConfirmRoom}/>
				<Route path="/pageNotFound/error" component={EmptyPage}/>
				<Route path="/hometest/home" component={HomeFormTest}/>
				<IndexRoute component={Homepage}/>
			</Route>
	  	</Router>
  </Provider>,
  document.getElementById('app'));
