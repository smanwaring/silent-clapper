import {connect} from 'react-redux';
import Board from '../components/Board';
import { stateBoardId } from '../actions/board-actions';

function mapStateToProps( {generatedBoard, currentBoard, buttonsToLoad, connectToSocket} ){
	return {
		generatedBoard,
		currentBoard,
		buttonsToLoad,
		connectToSocket
	};
}

function mapDispatchToProps(dispatch){
	return {
		setBoardId: (boardId) => {
			dispatch( stateBoardId(boardId) );
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);
