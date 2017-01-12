export const TOGGLE_SELECT_ALL = "TOGGLE_SELECT_ALL";
export const PICKED_BUTTON = "PICKED_BUTTON";
export const REMOVED_BUTTON = "REMOVED_BUTTON";
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


export const toggleSelectAll= (bool) => {
	return {
		type: TOGGLE_SELECT_ALL,
		payload: bool
	};
};