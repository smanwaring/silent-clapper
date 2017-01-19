import axios from 'axios';
import { hashHistory } from 'react-router';

/* ------ TYPE VARIABLES ------*/
export const LOAD_BUTTONS = 'LOAD_BUTTONS';
export const SET_BOARDID = 'SET_BOARDID';


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
		console.log("HERE IS WHAT WE ARE PASSING TO THUNK", roomId)
		axios.get(`/api/enter/${roomId}`)
			.then(res => res.data)
			.then(errorOrButtons => {
				console.log( "HERE IS WHAT IS RETURNED FROM FINDING THE ROOM", errorOrButtons);
				if (errorOrButtons.notFound){
					console.log("We are pushing to the error page")
					hashHistory.push('/pageNotFound/error');
				} else {
					console.log("we are dispatching found room with", errorOrButtons.buttons)
					dispatch( foundRoom(errorOrButtons.buttons) );
				}
			})
			.catch(err => console.log(err))
	}
	return thunk;
}
