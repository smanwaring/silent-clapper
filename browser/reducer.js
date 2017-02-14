import { combineReducers } from 'redux';
import { showCreateTab, showJoinTab } from './reducers/homeform-reducer';
import { buttonsPicked, buttonsAvailable, allButtonsSelected } from './reducers/pickbutton-reducer';
import { showPickButtonError, generatedBoard } from './reducers/createboard-reducer';
import { boardNotFound, buttonsToLoad, audienceCount } from './reducers/board-reducer';
import { currentBoard } from './reducers/joinboardform-reducer';


const rootReducer = combineReducers( {
	generatedBoard,
	currentBoard,
	buttonsPicked,
	boardNotFound,
	buttonsToLoad,
	showCreateTab,
	showJoinTab,
	allButtonsSelected,
	showPickButtonError,
	buttonsAvailable,
	audienceCount
});

export default rootReducer;

