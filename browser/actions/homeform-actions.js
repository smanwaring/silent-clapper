
export const SHOW_CREATE = "SHOW_CREATE";
export const HIDE_CREATE = "HIDE_CREATE";
export const SHOW_JOIN = "SHOW_JOIN";
export const HIDE_JOIN = "HIDE_JOIN";


export const showCreate = (bool) => {
	return {
		type: SHOW_CREATE,
		payload: bool
	};
};

export const hideCreate = (bool) => {
	return {
		type: HIDE_CREATE,
		payload: bool
	};
};


export const showJoin = (bool) => {
	return {
		type: SHOW_JOIN,
		payload: bool
	};
};

export const hideJoin = (bool) => {
	return {
		type: HIDE_JOIN,
		payload: bool
	};
};
