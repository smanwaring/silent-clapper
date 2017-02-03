import axios from 'axios';
import { hashHistory } from 'react-router';

/* -----------------    ACTIONS     ------------------ */

export const LOAD_BUTTONS = 'LOAD_BUTTONS';
export const SET_BOARDID = 'SET_BOARDID';


/* -----------------    ACTIONS     ------------------ */

export const stateBoardId = (boardId) => {
	return {
		type: SET_BOARDID,
		payload: boardId
	};
};

export const foundRoom = (buttons) => {
	return {
		type: LOAD_BUTTONS,
		payload: buttons
	};
};



/* ------------       REDUCER     ------------------ */
export const enterRoom = (roomId) => {
	const thunk = function(dispatch){ 
		axios.get(`/api/enter/${roomId}`)
			.then(res => res.data)
			.then(errorOrButtons => {
				// KAT: again, could make ternary:
				errorOrButtons.notFound ? hashHistory.push('/pageNotFound/error') : dispatch( foundRoom(errorOrButtons.buttons));
				// if (errorOrButtons.notFound){
				// 	hashHistory.push('/pageNotFound/error');
				// } else {
				// 	dispatch( foundRoom(errorOrButtons.buttons) );
				// }
			})
			.catch(err => console.log(err))
	}
	return thunk;
}
