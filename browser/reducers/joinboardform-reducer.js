import { SET_CURRENT_BOARD, BOARD_NOT_FOUND } from '../actions/joinboardform-actions' ;

export const currentBoard = (state = false, action) => {
	switch (action.type){
		case SET_CURRENT_BOARD:
			return action.payload;
		default: return state;
	}
};

export const foundBoardReducer = (state = false, action) => {
	switch (action.type){
		case BOARD_NOT_FOUND:
			return action.payload;
		default: return state;
	}
};