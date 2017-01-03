import React from 'react';
import {combineReducers} from 'redux';
import { SET_BOARDID, SET_CURRENT_BOARD, PICKED_BUTTON, REMOVED_BUTTON} from './actions';

const boardReducer = function(state="", action){
	switch(action.type){
		case SET_BOARDID: 
			return action.payload;
		default: return state;
	}
}

const currentBoardReducer = function(state="", action){
	switch(action.type){
		case SET_CURRENT_BOARD: 
			return action.payload;
		default: return state;
	}
}

const iconsPickedReducer = function(state=[], action){
	switch(action.type){
		case PICKED_BUTTON: 
			return [...state, action.payload];
		case REMOVED_BUTTON:
			return state.filter(icon => icon !== action.payload);
		default: return state;
	}
}

const rootReducer = combineReducers({
	boardId: boardReducer,
	currentBoard: currentBoardReducer,
	buttonsPicked: iconsPickedReducer
})

export default rootReducer;

