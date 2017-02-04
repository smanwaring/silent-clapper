import {connect} from 'react-redux';
import Board from '../components/Board';
import { stateBoardId } from '../actions/board-actions';

function mapStateToProps(state){
	return {
		boardId: state.generatedBoard,
		currentBoard: state.currentBoard,
		buttons: state.buttonsToLoad,
		connectToSocket: state.connectToSocket
	};
}

function mapDispatchToProps(dispatch){
	return {
		setBoardId: function(boardId){
			dispatch( stateBoardId(boardId) );
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);
