import axios from 'axios';

/* ------ action variables ----- */
export const SET_BOARDID = "SET_BOARDID";
export const SET_CURRENT_BOARD = "SET_CURRENT_BOARD";
export const PICKED_BUTTON = "PICKED_BUTTON";
export const REMOVED_BUTTON = "REMOVED_BUTTON";
export const LOAD_BUTTONS = "LOAD_BUTTONS";
export const ROOM_NOT_FOUND = "ROOM_NOT_FOUND";


/* ------ action creaters ------*/
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

export const pickedButton = (data) => {
	return {
		type: PICKED_BUTTON,
		payload: data
	};
};

export const removedButton = (icon) => {
	return {
		type: REMOVED_BUTTON,
		payload: icon
	};
};

export const foundRoom = (buttons) => {
	return {
		type: LOAD_BUTTONS,
		payload: buttons
	};
};


export const roomNotFound = () => {
	return {
		type: ROOM_NOT_FOUND,
		payload: true
	};
};





/* ------ async action creaters ------*/

export const loadRoom = (roomId) => {
	const thunk = function(dispatch){ 
		fetch(`/api/${roomId}`)
			.then(res => res.json())
			.then(room => { 
				if (room.message){
					dispatch(roomNotFound())
				} else {
					dispatch(stateCurrentBoard(room) ); 
				}
			})
			.catch(err => console.log(err));
	}
	return thunk;
}

export const addRoom = (details) => {
    const thunk = function (dispatch) {
        axios.post(`/api/`, details)
			.then(res => {console.log("here here here"); res.json()})
			.then(createdRoom => dispatch(stateBoardId(createdRoom.path)))
            .catch(err => console.log(err))
    }
    return thunk;
}


export const enterRoom = (roomId) => {
	const thunk = function(dispatch){ 
		fetch(`/api/enter/${roomId}`)
			.then(res => res.json())
			.then(roomButtons => dispatch(foundRoom(roomButtons)))
			.catch(err => console.log(err));
	}
	return thunk;
}




