import axios from 'axios';
import {hashHistory} from 'react-router';

/* ------ action variables ----- */
export const SET_BOARDID = "SET_BOARDID";
export const SET_CURRENT_BOARD = "SET_CURRENT_BOARD";
export const PICKED_BUTTON = "PICKED_BUTTON";
export const REMOVED_BUTTON = "REMOVED_BUTTON";
export const LOAD_BUTTONS = "LOAD_BUTTONS";
export const ROOM_NOT_FOUND = "ROOM_NOT_FOUND";
export const TOGGLE_CLAP = "TOGGLE_CLAP";
export const TOGGLE_FROWN = "TOGGLE_FROWN";
export const TOGGLE_EMPIRE = "TOGGLE_EMPIRE";
export const TOGGLE_HEART = "TOGGLE_HEART";
export const TOGGLE_MONEY = "TOGGLE_MONEY"
export const TOGGLE_SMILE = "TOGGLE_SMILE";
export const TOGGLE_QUESTION = "TOGGLE_QUESTION";
export const TOGGLE_THUMB = "TOGGLE_THUMB";
export const TOGGLE_RESISTANCE = "TOGGLE_RESISTANCE";
export const TOGGLE_BOMB = "TOGGLE_BOMB";


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

export const removedButton = (buttonData) => {
	return {
		type: REMOVED_BUTTON,
		payload: buttonData
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

export const toggleClap = (bool) => {
	return {
		type: TOGGLE_CLAP,
		payload: bool
	};
};

export const toggleFrown = (bool) => {
	return {
		type: TOGGLE_FROWN,
		payload: bool
	};
};


export const toggleEmpire = (bool) => {
	return {
		type: TOGGLE_EMPIRE,
		payload: bool
	};
};


export const toggleHeart = (bool) => {
	return {
		type: TOGGLE_HEART,
		payload: bool
	};
};

export const toggleMoney = (bool) => {
	return {
		type: TOGGLE_MONEY,
		payload: bool
	};
};

export const toggleSmile = (bool) => {
	return {
		type: TOGGLE_SMILE,
		payload: bool
	};
};

export const toggleQuestion = (bool) => {
	return {
		type: TOGGLE_QUESTION,
		payload: bool
	};
};

export const toggleThumb = (bool) => {
	return {
		type: TOGGLE_THUMB,
		payload: bool
	};
};

export const toggleResistance = (bool) => {
	return {
		type: TOGGLE_RESISTANCE,
		payload: bool
	};
};

export const toggleBomb = (bool) => {
	return {
		type: TOGGLE_BOMB,
		payload: bool
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
			.then(res => res.data)
			.then(createdRoom => dispatch(stateBoardId(createdRoom.path)))
            .catch(err => console.log(err))
    }
    return thunk;
}


export const enterRoom = (roomId) => {
	const thunk = function(dispatch){ 
		fetch(`/api/enter/${roomId}`)
			.then(res => {
				if (res.status === 404){
					hashHistory.push("/pageNotFound/error");
				} else {
					return res.json();
				}
			})
			.then(buttons => dispatch(foundRoom(buttons)))
			.catch(err => console.log(err));
	}
	return thunk;
}





