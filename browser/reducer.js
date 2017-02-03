import React from 'react';
import {combineReducers} from 'redux';


import { TOGGLE_PICK_BUTTON_ERROR, CLEAR_ALL_BUTTONS, CLEAR_ALL_SELECTED_BUTTONS  } from './actions/createboard-actions';
import { SHOW_CREATE, SHOW_JOIN } from './actions/homeform-actions'; 
import { ROOM_NOT_FOUND, SET_CURRENT_BOARD } from './actions/joinboardform-actions' ;
import { TOGGLE_SELECT_ALL, PICKED_BUTTON, REMOVED_BUTTON, TOGGLE_CLAP, TOGGLE_FROWN, TOGGLE_EMPIRE, TOGGLE_HEART, TOGGLE_MONEY, TOGGLE_SMILE, TOGGLE_QUESTION, TOGGLE_THUMB, TOGGLE_RESISTANCE, TOGGLE_BOMB } from './actions/pickbutton-actions';
import { LOAD_BUTTONS, SET_BOARDID } from './actions/room-actions';

// KAT: Since you have the button classes here already, you could save these in a separate file and refer to them both here (deconstructed) and in the JSX files that use them

const buttonDataState = [
            {
                color: 'blue',
                icon: 'fa fa-sign-language'
            }, 
            {
                color: 'red',
                icon: 'fa fa-frown-o'
            },
             {
                color: 'gray',
                icon: 'fa fa-empire'
            },
             {
                color: 'dark-blue',
                icon: 'fa fa-heart-o'
            },
             {
                color: 'green',
                icon: 'fa fa-money fa-spin'
            },
             {
                color: 'pink',
                icon: 'fa fa-smile-o'
            },
             {
                color: 'yellow',
                icon: 'fa fa-question'
            },
             {
                color: 'mint-green',
                icon: 'fa fa-thumbs-o-up'
            },
             {
                color: 'orange',
                icon: 'fa fa-rebel'
            },
              {
                color: 'purple',
                icon: 'fa fa-bomb fa-spin'
            }
];


const initialButtonState = {
	    clap: false,
		frown: false,
		empire: false,
		heart: false,
		money: false,
		smile: false,
		question: false,
		thumb: false,
		resistance: false,
		bomb: false
}

const boardReducer = function(state = '', action) {
	switch (action.type){
		case SET_BOARDID:
			return action.payload;
		default: return state;
	}
}

const currentBoardReducer = function(state = false, action) {
	switch (action.type){
		case SET_CURRENT_BOARD:
			return action.payload;
		default: return state;
	}
}

const iconsPickedReducer = function(state = [], action) {
	switch (action.type){
		case PICKED_BUTTON:
			return [...state, action.payload];
		case REMOVED_BUTTON:
			return state.filter(buttonInfo => buttonInfo.icon !== action.payload.icon);
		case CLEAR_ALL_BUTTONS:
			return [];
		default: return state;
	}
}

const foundRoomReducer = function(state = false, action) {
	switch (action.type){
		case ROOM_NOT_FOUND:
			return action.payload;
		default: return state;
	}
}

const roomButtonsReducer = function(state = [], action) {
	switch (action.type){
		case LOAD_BUTTONS:
			return action.payload;
		default: return state;
	}
}


const showCreateTabReducer = function(state = false, action) {
	switch (action.type){
		case SHOW_CREATE:
			return action.payload;
		default: return state;
	}
}

const showJoinBoardTabReducer= function(state = true, action) {
	switch (action.type){
		case SHOW_JOIN:
			return action.payload;
		default: return state;
	}
}

const toggleSelectAllReducer = function(state = false, action) {
	switch (action.type){
		case TOGGLE_SELECT_ALL:
			return action.payload;
		default: return state;
	}
}

const pickButtonErrorReducer = function(state = false, action) {
	switch (action.type){
		case TOGGLE_PICK_BUTTON_ERROR:
			return action.payload;
		default: return state;
	}
}

const buttonsAvailableReducer = function(state = buttonDataState, action) {
	switch (action.type){
		default: return state;
	}
}

const selectButtonReducer = function(state = initialButtonState, action) {
	switch (action.type) {
		case TOGGLE_CLAP:
			return Object.assign({}, state, {clap: action.payload});
		case TOGGLE_FROWN:
			return Object.assign({}, state, {frown: action.payload});
		case TOGGLE_EMPIRE:
			return Object.assign({}, state, {empire: action.payload});
		case TOGGLE_HEART:
			return Object.assign({}, state, {heart: action.payload});
		case TOGGLE_MONEY:
			return Object.assign({}, state, {money: action.payload});
		case TOGGLE_SMILE:
			return Object.assign({}, state, {smile: action.payload});
		case TOGGLE_QUESTION:
			return Object.assign({}, state, {question: action.payload});
		case TOGGLE_THUMB:
			return Object.assign({}, state, {thumb: action.payload});
		case TOGGLE_BOMB:
			return Object.assign({}, state, {bomb: action.payload});
		case TOGGLE_RESISTANCE:
			return Object.assign({}, state, {resistance: action.payload});
		case CLEAR_ALL_SELECTED_BUTTONS:
			return initialButtonState;
		default: return state;
	}
}


const rootReducer = combineReducers({
	generatedBoard: boardReducer,
	currentBoard: currentBoardReducer,
	buttonsPicked: iconsPickedReducer,
	roomNotFound: foundRoomReducer,
	buttonsToLoad:  roomButtonsReducer,
	buttonSelected: selectButtonReducer,
	showCreateTab: showCreateTabReducer,
	showJoinTab: showJoinBoardTabReducer,
	allButtonSelect: toggleSelectAllReducer,
	showPickButtonError: pickButtonErrorReducer,
	buttonsAvailable: buttonsAvailableReducer,
})

export default rootReducer;

