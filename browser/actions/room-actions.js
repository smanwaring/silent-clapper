import axios from 'axios';
import { hashHistory } from 'react-router';

export const LOAD_BUTTONS = "LOAD_BUTTONS";
export const SET_BOARDID = "SET_BOARDID";

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



/* ------ async action creaters ------*/
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
			.then(buttons => {
				dispatch( foundRoom(buttons) );
			})
			.catch(err => console.log(err));
	}
	return thunk;
}
