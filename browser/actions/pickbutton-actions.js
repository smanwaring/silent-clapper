/* -----------------    ACTIONS     ------------------ */
export const TOGGLE_SELECT_ALL = 'TOGGLE_SELECT_ALL';
export const PICKED_BUTTON = 'PICKED_BUTTON';
export const REMOVED_BUTTON = 'REMOVED_BUTTON';
export const TOGGLE_BUTTON_SELECTED = 'TOGGLE_BUTTON_SELECTED';
export const TOGGLE_ALL_BUTTONS = 'TOGGLE_ALL_BUTTONS';

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

export const toggleButtonSelected = (bool, index) => {
	console.log(index);
	return {
		type: TOGGLE_BUTTON_SELECTED,
		boolean: bool,
		index: index
	};
};

export const toggleAllButtons = bool => {
	return {
		type: TOGGLE_ALL_BUTTONS,
		boolean: bool,
	};
};

