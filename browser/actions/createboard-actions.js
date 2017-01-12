import axios from 'axios';
export const TOGGLE_PICK_BUTTON_ERROR = "TOGGLE_PICK_BUTTON_ERROR";
export const SET_BOARDID = "SET_BOARDID";


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

/* ------ async action creaters ------*/

export const addRoom = (details) => {
    const thunk = function (dispatch) {
        axios.post(`/api/`, details)
			.then(res => res.data)
			.then(createdRoom => dispatch( stateBoardId(createdRoom.path) ) )
            .catch(err => console.log(err))
    }
    return thunk;
}

