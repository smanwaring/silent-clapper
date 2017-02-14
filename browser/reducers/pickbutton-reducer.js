import { TOGGLE_SELECT_ALL, PICKED_BUTTON, REMOVED_BUTTON, TOGGLE_BUTTON_SELECTED, TOGGLE_ALL_BUTTONS } from '../actions/pickbutton-actions';
import { CLEAR_ALL_BUTTONS } from '../actions/createboard-actions';
import { buttonData } from '../initialstate';

export const buttonsPicked = (state = [], action) => {
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

export const buttonsAvailable = (state = buttonData, action) => {
	let newState;
	switch (action.type){
		case TOGGLE_BUTTON_SELECTED:
			newState = state.map( (obj) => {
				if (obj.index == action.index) {
					obj.isSelected = action.boolean;
				}
				return obj;
			});
			return newState;
		case TOGGLE_ALL_BUTTONS:
			newState = state.map( (obj) => {
				obj.isSelected = action.boolean;
				return obj;
			});
			return newState;
		default: return state;
	}
};

export const allButtonsSelected = (state = false, action) => {
	switch (action.type){
		case TOGGLE_SELECT_ALL:
			return action.payload;
		default: return state;
	}
};


