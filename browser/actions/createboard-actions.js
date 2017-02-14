import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const TOGGLE_PICK_BUTTON_ERROR = 'TOGGLE_PICK_BUTTON_ERROR';
export const SET_BOARDID = 'SET_BOARDID';
export const CLEAR_ALL_BUTTONS = 'CLEAR_ALL_BUTTONS';
export const CLEAR_ALL_SELECTED_BUTTONS = 'CLEAR_ALL_SELECTED_BUTTONS';

/* ------------   ACTION CREATORS     ------------------ */
export const pickButtonError = bool => {
  return {
		type: TOGGLE_PICK_BUTTON_ERROR,
		payload: bool
	};
};

export const stateBoardId = boardId => {
	return {
		type: SET_BOARDID,
		payload: boardId
	};
};

export const clearAllButtons = () => {
	return {
		type: CLEAR_ALL_BUTTONS,
	};
};

/* ------------       ASYNC ACTION CREATORS     ------------------ */
export const addBoard = details => {
    return dispatch => {
        axios.post(`/api/`, details)
			.then(res => res.data)
			.then(createdBoard => dispatch( stateBoardId(createdBoard.path) ) )
            .catch(err => console.log(err));
    };
};

