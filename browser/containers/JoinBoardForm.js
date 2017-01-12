import {connect} from 'react-redux';
import JoinBoardForm from '../components/JoinBoardForm';
import { loadRoom, roomNotFound } from '../actions/joinboardform-actions';

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
        },
		clearRoomNotFound: function(bool){
 			dispatch (  roomNotFound(bool) ); 
  		}		  
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JoinBoardForm);
