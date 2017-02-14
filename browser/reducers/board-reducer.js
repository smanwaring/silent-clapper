import { BOARD_NOT_FOUND } from '../actions/joinboardform-actions' ;
import { LOAD_BUTTONS, SET_AUDIENCE_COUNT  } from '../actions/board-actions';

export const boardNotFound = (state = false, action) => {
	switch (action.type){
		case BOARD_NOT_FOUND:
			return action.payload;
		default: return state;
	}
};

export const buttonsToLoad = (state = [], action) => {
	switch (action.type){
		case LOAD_BUTTONS:
			return action.payload;
		default: return state;
	}
};

export const audienceCount = (state = '', action) => {
	switch (action.type){
		case SET_AUDIENCE_COUNT:
			return action.payload;
		default: return state;
	}
};
