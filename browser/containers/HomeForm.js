import {connect} from 'react-redux';
import HomeForm from '../components/HomeForm';
import { setInterval, stateBoardId, stateCurrentBoard, addRoom, loadRoom, showCreate, hideCreate, showJoin, hideJoin, roomNotFound } from '../actions';

function mapStateToProps(state){
	return {
		boardId: state.generatedBoard,
		buttons: state.buttonsPicked,
		roomNotFound: state.roomNotFound,
		buttonsToLoad: state.buttonsToLoad,
		foundBoard: state.currentBoard,
		showCreate: state.showCreateTab,
		showJoin: state.showJoinTab
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
		},
		showCreateTab: function(bool) {
			dispatch ( showCreate(bool) );
		},
		hideCreateTab: function(bool) {
			dispatch ( hideCreate(bool) );
		},
		showJoinTab: function(bool) {
			dispatch ( showJoin(bool) );
		},
		hideJoinTab: function(bool) {
			dispatch ( hideJoin(bool) );
		},
		clearRoomNotFound: function(bool){
			dispatch (  roomNotFound(bool) ); 
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeForm);
