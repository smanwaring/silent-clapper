import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const ROOM_NOT_FOUND = "ROOM_NOT_FOUND";
export const SET_CURRENT_BOARD = "SET_CURRENT_BOARD";


/* ------------   ACTION CREATORS     ------------------ */
export const roomNotFound = (bool) => {
	return {
		type: ROOM_NOT_FOUND,
		payload: bool
	};
};


export const stateCurrentBoard = (boardId) => {
	return {
		type: SET_CURRENT_BOARD,
		payload: boardId
	};
};


/* ------------       DISPATCHERS     ------------------ */

export const loadRoom = (roomId) => {
	const thunk = function(dispatch){ 
		axios.get(`/api/${roomId}`)
			.then( res => res.data )
			.then( room => { 
				// KAT: could make this ternary to reduce lines
				room.message ? dispatch(roomNotFound(true)) : dispatch(stateCurrentBoard(room));
				// if (room.message) {
				// 	dispatch( roomNotFound(true) );
				// } else {
				// 	dispatch( stateCurrentBoard(room) );
				// }
			})
			.catch(err => console.log(err));
	}
	return thunk;
}
