import React from 'react';
import {combineReducers} from 'redux';
import { SET_BOARDID, SET_CURRENT_BOARD, PICKED_BUTTON, REMOVED_BUTTON, ROOM_NOT_FOUND, LOAD_BUTTONS} from './actions';

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

const foundRoomReducer = function(state=false, action){
	switch(action.type){
		case ROOM_NOT_FOUND: 
			return action.payload;
		default: return state;
	}
}

const roomButtonsReducer = function(state=[], action){
	switch(action.type){
		case LOAD_BUTTONS: 
			return [...state, ...action.payload];
		default: return state;
	}
}

const rootReducer = combineReducers({
	generatedBoard: boardReducer,
	currentBoard: currentBoardReducer,
	buttonsPicked: iconsPickedReducer,
	roomNotFound: foundRoomReducer,
	buttonsToLoad:  roomButtonsReducer
})

export default rootReducer;

