import {connect} from 'react-redux';
import PickButtons from '../components/PickButtons';
import { pickedButton, removedButton, toggleSelectAll, toggleButtonState } from '../actions/pickbutton-actions';

const  mapStateToProps = ( {buttonsPicked, allButtonsSelected, buttonSelected, buttonsAvailable} ) => {
	return {
		buttonsPicked,
		buttonSelected,
		allButtonsSelected,
		buttonsAvailable,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addButton: icon => {
			dispatch( pickedButton(icon) );
		},
		removeButton: icon => {
			dispatch( removedButton(icon) );
		},
		toggleSelect: bool => {
			dispatch( toggleSelectAll(bool) );
		},
		toggleButton: (bool, shortIcon) => {
			dispatch( toggleButtonState(bool, shortIcon) );
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PickButtons);


