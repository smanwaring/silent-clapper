/* ------ action variables ----- */
export const SET_INTERVAL = "SET_INTERVAL";
export const SET_BOARDID = "SET_BOARDID";
export const SET_CURRENT_BOARD = "SET_CURRENT_BOARD";


/* ------ action creaters ------*/
export const setInterval = (time) => {
	return {
		type: SET_INTERVAL,
		payload: time
	};
};

export const stateBoardId = (boardId) => {
	return {
		type: SET_BOARDID,
		payload: boardId
	};
};

export const stateCurrentBoard = (boardId) => {
	return {
		type: SET_CURRENT_BOARD,
		payload: boardId
	};
};
