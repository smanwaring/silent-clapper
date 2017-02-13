import axios from 'axios';
import { hashHistory } from 'react-router';

/* -----------------    ACTIONS     ------------------ */

export const LOAD_BUTTONS = 'LOAD_BUTTONS';
export const SET_BOARDID = 'SET_BOARDID';


/* -----------------    ACTION CREATORS     ------------------ */

export const stateBoardId = boardId => {
    return {
		type: SET_BOARDID,
		payload: boardId
	};
};

export const foundBoard = buttons => {
	return {
		type: LOAD_BUTTONS,
		payload: buttons
	};
};



/* ------------       REDUCER     ------------------ */
export const enterBoard = boardId => {
	return dispatch => {
		axios.get(`/api/enter/${boardId}`)
			.then(res => res.data)
			.then(errorOrButtons => {
				errorOrButtons.notFound ? hashHistory.push('/pageNotFound/error') : dispatch( foundBoard(errorOrButtons.buttons));
			})
			.catch(err => console.log(err));
	};
};

