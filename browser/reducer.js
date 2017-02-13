import { combineReducers } from 'redux';
import { TOGGLE_PICK_BUTTON_ERROR, CLEAR_ALL_BUTTONS, CLEAR_ALL_SELECTED_BUTTONS  } from './actions/createboard-actions';
import { SHOW_CREATE, SHOW_JOIN } from './actions/homeform-actions'; 
import { BOARD_NOT_FOUND, SET_CURRENT_BOARD } from './actions/joinboardform-actions' ;
import { TOGGLE_SELECT_ALL, PICKED_BUTTON, REMOVED_BUTTON, TOGGLE_CLAP, TOGGLE_FROWN, TOGGLE_EMPIRE, TOGGLE_HEART, TOGGLE_MONEY, TOGGLE_SMILE, TOGGLE_QUESTION, TOGGLE_THUMB, TOGGLE_RESISTANCE, TOGGLE_BOMB, TOGGLE_BUTTON_STATE } from './actions/pickbutton-actions';
import { LOAD_BUTTONS, SET_BOARDID } from './actions/board-actions';
import { buttonData, initialButtonState} from './initialstate';

const boardReducer = (state = '', action) => {
	switch (action.type){
		case SET_BOARDID:
			return action.payload;
		default: return state;
	}
};

const currentBoardReducer = (state = false, action) => {
	switch (action.type){
		case SET_CURRENT_BOARD:
			return action.payload;
		default: return state;
	}
};

const iconsPickedReducer = (state = [], action) => {
	switch (action.type){
		case PICKED_BUTTON:
			return [...state, action.payload];
		case REMOVED_BUTTON:
			return state.filter(buttonInfo => buttonInfo.icon !== action.payload.icon);
		case CLEAR_ALL_BUTTONS:
			return [];
		default: return state;
	}
};

const foundBoardReducer = (state = false, action) => {
	switch (action.type){
		case BOARD_NOT_FOUND:
			return action.payload;
		default: return state;
	}
};

const boardButtonsReducer = (state = [], action) => {
	switch (action.type){
		case LOAD_BUTTONS:
			return action.payload;
		default: return state;
	}
};


const showCreateTabReducer = (state = false, action) => {
	switch (action.type){
		case SHOW_CREATE:
			return action.payload;
		default: return state;
	}
};

const showJoinBoardTabReducer = (state = true, action) => {
	switch (action.type){
		case SHOW_JOIN:
			return action.payload;
		default: return state;
	}
};

const toggleSelectAllReducer = (state = false, action) => {
	switch (action.type){
		case TOGGLE_SELECT_ALL:
			return action.payload;
		default: return state;
	}
};

const pickButtonErrorReducer = (state = false, action) => {
	switch (action.type){
		case TOGGLE_PICK_BUTTON_ERROR:
			return action.payload;
		default: return state;
	}
};

const buttonsAvailableReducer = (state = buttonData, action) => {
	switch (action.type){
		default: return state;
	}
};

const selectButtonReducer = (state = initialButtonState, action) => {
	switch (action.type) {
		case TOGGLE_BUTTON_STATE:
			return Object.assign({}, state, {[action.icon]: action.boolean});
		default: return state;
	}
};



const rootReducer = combineReducers({
	generatedBoard: boardReducer,
	currentBoard: currentBoardReducer,
	buttonsPicked: iconsPickedReducer,
	boardNotFound: foundBoardReducer,
	buttonsToLoad:  boardButtonsReducer,
	buttonSelected: selectButtonReducer,
	showCreateTab: showCreateTabReducer,
	showJoinTab: showJoinBoardTabReducer,
	allButtonsSelected: toggleSelectAllReducer,
	showPickButtonError: pickButtonErrorReducer,
	buttonsAvailable: buttonsAvailableReducer,
});

export default rootReducer;

