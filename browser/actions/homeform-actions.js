
export const SHOW_CREATE = "SHOW_CREATE";
export const SHOW_JOIN = "SHOW_JOIN";


export const showCreate = (bool) => {
	return {
		type: SHOW_CREATE,
		payload: bool
	};
};


export const showJoin = (bool) => {
	return {
		type: SHOW_JOIN,
		payload: bool
	};
};

