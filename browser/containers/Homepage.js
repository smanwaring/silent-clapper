import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import { setInterval, stateBoardId } from '../actions';

function mapStateToProps(state){
	return {
		boardId: state.boardId
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
)(Homepage);
