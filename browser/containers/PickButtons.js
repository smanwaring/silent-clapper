import {connect} from 'react-redux';
import PickButtons from '../components/PickButtons';
import { pickedButton, removedButton, toggleClap,
toggleBomb, toggleThumb, toggleSmile, toggleResistance, toggleHeart, toggleMoney, toggleQuestion, toggleFrown, toggleEmpire, toggleSelectAll} from '../actions/pickbutton-actions';

function mapStateToProps(state){
	return {
		picked: state.buttonsPicked,
		buttonClass: state.buttonSelected,
		allSelected: state.allButtonSelect,
		buttonsAvailable: state.buttonsAvailable
	};
}

function mapDispatchToProps(dispatch){
	return {
		addButton: function(icon) {
			dispatch( pickedButton(icon) );
		},
		removeButton: function (icon) {
			dispatch( removedButton(icon) );
		},
		clapClicked: function (bool) {
			dispatch( toggleClap(bool) );
		},
		frownClicked: function (bool) {
			dispatch( toggleFrown(bool) );
		},
		empireClicked: function (bool) {
			dispatch( toggleEmpire(bool) );
		},
		heartClicked: function (bool) {
			dispatch( toggleHeart(bool) );
		},
		smileClicked: function (bool) {
			dispatch( toggleSmile(bool) );
		},
		bombClicked: function (bool) {
			dispatch( toggleBomb(bool) );
		},
		thumbClicked: function (bool) {
			dispatch( toggleThumb(bool) );
		},
		resistanceClicked: function (bool) {
			dispatch( toggleResistance(bool) );
		},
		moneyClicked: function (bool) {
			dispatch( toggleMoney(bool) );
		},
		questionClicked: function (bool) {
			dispatch( toggleQuestion(bool) );
		},
		selectAll: function(bool) {
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
		toggleSelect: function(bool){
			dispatch( toggleSelectAll(bool) );
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PickButtons);


