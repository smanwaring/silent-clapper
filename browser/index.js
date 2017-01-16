'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from './store';


/*------ COMPONENTS/CONTAINERS ------ */
import Homepage from './containers/Homepage';
import Room from './containers/Room';
import Root from './components/Root';
import EmptyPage from './components/EmptyPage';

/*------ ACTIONS ------ */
import { enterRoom } from './actions/room-actions';
import { roomNotFound, stateCurrentBoard } from './actions/joinboardform-actions';
import { showPickButtonError } from './actions/createboard-actions';




/*------ load the buttons for the room you are about to enter ------ */
function onEnterConfirmRoom(nextState) {
	store.dispatch( enterRoom(nextState.params.roomId) );
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
				<IndexRoute component={Homepage}/>
			</Route>
		</Router>
  </Provider>,
  document.getElementById('app'));
