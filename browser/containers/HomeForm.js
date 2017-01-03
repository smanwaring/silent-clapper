import {connect} from 'react-redux';
import HomeForm from '../components/HomeForm';
import { setInterval, stateBoardId, stateCurrentBoard } from '../actions';

function mapStateToProps(state){
	return {
		boardId: state.boardId
	};
}

function mapDispatchToProps(dispatch){
	return {
		setBoardId: function(boardId){
			dispatch(stateBoardId(boardId));
		},
		setCurrentBoard: function(boardId){
			dispatch(stateCurrentBoard(boardId));
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeForm);
