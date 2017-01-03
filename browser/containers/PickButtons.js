import {connect} from 'react-redux';
import PickButtons from '../components/PickButtons';
import { stateBoardId, pickedButton, removedButton } from '../actions';

function mapStateToProps(state){
	return {
		picked: state.buttonsPicked,
	};
}

function mapDispatchToProps(dispatch){
	return {
		addButton: function(icon){
			dispatch( pickedButton(icon) );
		},
		removeButton: function (icon) {
			dispatch ( removedButton(icon) );
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PickButtons);
