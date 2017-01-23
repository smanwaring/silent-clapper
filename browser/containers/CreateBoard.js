import {connect} from 'react-redux';
import CreateBoard from '../components/CreateBoard';
import { addRoom, showPickButtonError, stateBoardId, clearAllButtons, clearAllSelectedButtons  } from '../actions/createboard-actions';

function mapStateToProps(state){
	return {
		buttons: state.buttonsPicked,
		generatedBoard: state.generatedBoard,
        showCreate: state.showCreateTab,
		showPickButtonError: state.showPickButtonError
	};
}

function mapDispatchToProps(dispatch){
	return {
		addBoard: function(details){
			dispatch( addRoom(details) );
		},
		pickButtonsError: function(bool){
			dispatch ( showPickButtonError(bool) );
		},
		clearGeneratedboard: function(details){
			dispatch( stateBoardId(details) );
			dispatch( clearAllButtons() );
			dispatch( clearAllSelectedButtons() );
		},
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateBoard);




