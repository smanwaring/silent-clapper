import {connect} from 'react-redux';
import Board from '../components/Board';
import { stateBoardId } from '../actions/board-actions';

const mapStateToProps = ( {generatedBoard, currentBoard, buttonsToLoad, connectToSocket} ) => {
	return {
		generatedBoard,
		currentBoard,
		buttonsToLoad,
		connectToSocket
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setBoardId: boardId => {
			dispatch( stateBoardId(boardId) );
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);
