import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const TOGGLE_PICK_BUTTON_ERROR = "TOGGLE_PICK_BUTTON_ERROR";
export const SET_BOARDID = "SET_BOARDID";
export const CLEAR_ALL_BUTTONS = "CLEAR_ALL_BUTTONS";
export const CLEAR_ALL_SELECTED_BUTTONS = "CLEAR_ALL_SELECTED_BUTTONS";

/* ------------   ACTION CREATORS     ------------------ */
export const showPickButtonError = (bool) => {
	return {
		type: TOGGLE_PICK_BUTTON_ERROR,
		payload: bool
	};
};

export const stateBoardId = (boardId) => {
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

export const clearAllSelectedButtons = () => {
	return {
		type: CLEAR_ALL_SELECTED_BUTTONS,
	};
};

/* ------------       DISPATCHERS     ------------------ */
export const addRoom = (details) => {
    const thunk = function (dispatch) {
        axios.post(`/api/`, details)
			.then(res => res.data)
			.then(createdRoom => dispatch( stateBoardId(createdRoom.path) ) )
            .catch(err => console.log(err))
    }
    return thunk;
}

