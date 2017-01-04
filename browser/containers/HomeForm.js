import {connect} from 'react-redux';
import HomeForm from '../components/HomeForm';
import { setInterval, stateBoardId, stateCurrentBoard, addRoom, loadRoom } from '../actions';

function mapStateToProps(state){
	return {
		boardId: state.generatedBoard,
		buttons: state.buttonsPicked,
		roomNotFound: state.roomNotFound,
		buttonsToLoad: state.buttonsToLoad,
		foundBoard: state.currentBoard
	};
}

function mapDispatchToProps(dispatch){
	return {
		setBoardId: function(boardId){
			dispatch(stateBoardId(boardId));
		},
		setCurrentBoard: function(boardId){
			dispatch(stateCurrentBoard(boardId));
		},
		addBoard: function(details){
			dispatch( addRoom(details));
		},
		confirmRoom: function(boardId) {
			dispatch ( loadRoom(boardId) );
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeForm);
