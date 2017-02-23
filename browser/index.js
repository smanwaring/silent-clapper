'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';

/*------ COMPONENTS/CONTAINERS ------ */
import Homepage from './containers/Homepage';
import Board from './containers/Board';
import Root from './components/Root';
import EmptyPage from './components/EmptyPage';

/*------ ACTIONS ------ */
import { enterBoard, foundBoard } from './actions/board-actions';
import { showBoardNotFound, stateCurrentBoard } from './actions/joinboardform-actions';
import { pickButtonError } from './actions/createboard-actions';

/*------ load the buttons for the board you are about to enter ------ */
function onEnterConfirmBoard(nextState) {
	store.dispatch( enterBoard(nextState.params.boardId) );
	store.dispatch( stateCurrentBoard(nextState.params.boardId));
	store.dispatch( showBoardNotFound(false) );
}

/*------ when you redirect back to the homepage, set the currentBoard state to empty/false lest you run into componentDidUpdate issues ------ */
function onEnterResetCurrentBoard() {
	store.dispatch( stateCurrentBoard(false) );
	store.dispatch( pickButtonError(false) );
	store.dispatch( foundBoard( [] ) );
}

ReactDOM.render(
  <Provider store={store}>
	    <Router history={browserHistory}>
			<Route component={Root}>
				<Route path="/" component={Homepage} onEnter={onEnterResetCurrentBoard} />
				<Route path="/:boardId" component={Board} onEnter={onEnterConfirmBoard} />
				<Route path="/pageNotFound/error" component={EmptyPage} />
				<IndexRoute component={Homepage} />
			</Route>
		</Router>
  </Provider>,
  document.getElementById('app'));
