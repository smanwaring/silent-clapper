import { TOGGLE_PICK_BUTTON_ERROR } from '../actions/createboard-actions';
import { SET_BOARDID } from '../actions/board-actions';

export const showPickButtonError = (state = false, action) => {
	switch (action.type){
		case TOGGLE_PICK_BUTTON_ERROR:
			return action.payload;
		default: return state;
	}
};

export const generatedBoard = (state = '', action) => {
	switch (action.type){
		case SET_BOARDID:
			return action.payload;
		default: return state;
	}
};