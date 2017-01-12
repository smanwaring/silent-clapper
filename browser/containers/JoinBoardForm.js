import {connect} from 'react-redux';
import JoinBoardForm from '../components/JoinBoardForm';
import { loadRoom } from '../actions';

function mapStateToProps(state){
	return {
		showJoin: state.showJoinTab,
        roomNotFound: state.roomNotFound,
        foundBoard: state.currentBoard
	};
}

function mapDispatchToProps(dispatch){
	return {
        confirmRoom: function(boardId) {
            dispatch ( loadRoom(boardId) );
        }
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JoinBoardForm);
