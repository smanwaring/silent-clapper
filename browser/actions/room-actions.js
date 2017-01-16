import axios from 'axios';
import { hashHistory } from 'react-router';

/* ------ TYPE VARIABLES ------*/
export const LOAD_BUTTONS = "LOAD_BUTTONS";
export const SET_BOARDID = "SET_BOARDID";


/* ------ SYNCHRONOUS ACTION CREATORS ------*/
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



/* ------ ASYNC ACTION CREATORS ------*/
export const enterRoom = (roomId) => {
	const thunk = function(dispatch){ 
		fetch(`/api/enter/${roomId}`)
			.then(res => res.json())
			.then(errorOrButtons => {
				if(errorOrButtons.notFound){
					hashHistory.push("/pageNotFound/error");
				} else {
					dispatch( foundRoom(errorOrButtons.buttons) );
				}
			})
			.catch(err => console.log(err))
	}
	return thunk;
}
