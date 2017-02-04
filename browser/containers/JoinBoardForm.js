import { connect } from 'react-redux';
import JoinBoardForm from '../components/JoinBoardForm';
import { loadBoard, boardNotFound } from '../actions/joinboardform-actions';

function mapStateToProps(state){
	return {
		showJoin: state.showJoinTab,
        boardNotFound: state.boardNotFound,
        foundBoard: state.currentBoard
	};
}

function mapDispatchToProps(dispatch){
	return {
        confirmBoard: function(boardId) {
            dispatch( loadBoard(boardId) );
        },
		clearBoardNotFound: function(bool){
			dispatch(  boardNotFound(bool) );
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JoinBoardForm);
