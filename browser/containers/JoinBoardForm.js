import { connect } from 'react-redux';
import JoinBoardForm from '../components/JoinBoardForm';
import { loadBoard, showBoardNotFound } from '../actions/joinboardform-actions';

function mapStateToProps( {showJoinTab, boardNotFound, currentBoard} ){
	return {
		showJoinTab,
		boardNotFound,
		currentBoard
	};
}

function mapDispatchToProps(dispatch){
	return {
        confirmBoard: (boardId) => {
            dispatch( loadBoard(boardId) );
        },
		clearBoardNotFound: (bool) => {
			dispatch(  showBoardNotFound(bool) );
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JoinBoardForm);
