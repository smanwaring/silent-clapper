import React from 'react';
import {combineReducers} from 'redux';
import {SET_INTERVAL, SET_BOARDID, SET_CURRENT_BOARD} from './actions';

const timeReducer = function(state="", action){
	switch(action.type){
		case SET_INTERVAL: 
			return action.payload;
		default: return state;
	}
}

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


const rootReducer = combineReducers({
	interval: timeReducer,
	boardId: boardReducer,
	currentBoard: currentBoardReducer
})

export default rootReducer;

