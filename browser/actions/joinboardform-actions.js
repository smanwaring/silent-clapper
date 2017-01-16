import axios from 'axios';

/* ------ TYPE VARIABLES ------*/
export const ROOM_NOT_FOUND = "ROOM_NOT_FOUND";
export const SET_CURRENT_BOARD = "SET_CURRENT_BOARD";


/* ------ SYNCHRONOUS ACTION CREATORS ------*/
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


/* ------ ASYNC ACTION CREATORS ------*/

export const loadRoom = (roomId) => {
	const thunk = function(dispatch){ 
		fetch(`/api/${roomId}`)
			.then(res => res.json())
			.then(room => { 
				if (room.message){
					dispatch(roomNotFound(true))
				} else {
					dispatch(stateCurrentBoard(room) ); 
				}
			})
			.catch(err => console.log(err));
	}
	return thunk;
}
