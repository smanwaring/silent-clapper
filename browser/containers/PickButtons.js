import {connect} from 'react-redux';
import PickButtons from '../components/PickButtons';
import { pickedButton, removedButton, toggleClap,
toggleBomb, toggleThumb, toggleSmile, toggleResistance, toggleHeart, toggleMoney, toggleQuestion, toggleFrown, toggleEmpire, toggleSelectAll} from '../actions/pickbutton-actions';

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
		clapClicked: bool => {
			dispatch( toggleClap(bool) );
		},
		frownClicked: bool => {
			dispatch( toggleFrown(bool) );
		},
		empireClicked: bool => {
			dispatch( toggleEmpire(bool) );
		},
		heartClicked: bool => {
			dispatch( toggleHeart(bool) );
		},
		smileClicked: bool => {
			dispatch( toggleSmile(bool) );
		},
		bombClicked: bool => {
			dispatch( toggleBomb(bool) );
		},
		thumbClicked: bool => {
			dispatch( toggleThumb(bool) );
		},
		resistanceClicked: bool => {
			dispatch( toggleResistance(bool) );
		},
		moneyClicked: bool => {
			dispatch( toggleMoney(bool) );
		},
		questionClicked: bool => {
			dispatch( toggleQuestion(bool) );
		},
		selectAll: bool => {
			dispatch( toggleClap(bool) );
			dispatch( toggleFrown(bool) );
			dispatch( toggleEmpire(bool) );
			dispatch( toggleHeart(bool) );
			dispatch( toggleSmile(bool) );
			dispatch( toggleBomb(bool) );
			dispatch( toggleThumb(bool) );
			dispatch( toggleResistance(bool) );
			dispatch( toggleMoney(bool) );
			dispatch( toggleQuestion(bool) );
			dispatch( toggleSelectAll(bool) );
		},
		toggleSelect: bool => {
			dispatch( toggleSelectAll(bool) );
		}
	};

};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PickButtons);


