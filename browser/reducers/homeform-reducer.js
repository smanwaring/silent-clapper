import { SHOW_CREATE, SHOW_JOIN } from '../actions/homeform-actions';

export const showCreateTab = (state = false, action) => {
	switch (action.type){
		case SHOW_CREATE:
			return action.payload;
		default: return state;
	}
};

export const showJoinTab = (state = true, action) => {
	switch (action.type){
		case SHOW_JOIN:
			return action.payload;
		default: return state;
	}
};
