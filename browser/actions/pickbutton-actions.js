/* -----------------    ACTIONS     ------------------ */
export const TOGGLE_SELECT_ALL = 'TOGGLE_SELECT_ALL';
export const PICKED_BUTTON = 'PICKED_BUTTON';
export const REMOVED_BUTTON = 'REMOVED_BUTTON';
export const TOGGLE_BUTTON_STATE = 'TOGGLE_BUTTON_STATE';


/* ------------   ACTION CREATORS     ------------------ */
export const pickedButton = data => {
	return {
		type: PICKED_BUTTON,
		payload: data
	};
};

export const removedButton = buttonData => {
	return {
		type: REMOVED_BUTTON,
		payload: buttonData
	};
};


export const toggleSelectAll = bool => {
	return {
		type: TOGGLE_SELECT_ALL,
		payload: bool
	};
};

export const toggleButtonState = (bool, shortIcon) => {
	return {
		type: TOGGLE_BUTTON_STATE,
		boolean: bool,
		icon: shortIcon
	};
};
