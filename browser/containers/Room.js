import {connect} from 'react-redux';
import Room from '../components/Room';
import { setInterval, stateBoardId } from '../actions';

function mapStateToProps(state){
	return {
		boardId: state.boardId,
		currentBoard: state.currentBoard
	};
}

function mapDispatchToProps(dispatch){
	return {
		setBoardId: function(boardId){
			dispatch(stateBoardId(boardId));
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Room);
