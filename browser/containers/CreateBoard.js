import {connect} from 'react-redux';
import CreateBoard from '../components/CreateBoard';
import { addRoom, showPickButtonError  } from '../actions/createboard-actions';

function mapStateToProps(state){
	return {
		buttons: state.buttonsPicked,
		boardId: state.generatedBoard,
        showCreate: state.showCreateTab
	};
}

function mapDispatchToProps(dispatch){
	return {
		addBoard: function(details){
			dispatch( addRoom(details) );
		},
		pickButtonsError: function(bool){
			dispatch ( showPickButtonError(bool) );
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateBoard);




