import {connect} from 'react-redux';
import Board from '../components/Board';
import { stateBoardId, setAudienceCount } from '../actions/board-actions';

const mapStateToProps = ( {generatedBoard, currentBoard, buttonsToLoad, connectToSocket, audienceCount} ) => {
  return {
    generatedBoard,
    currentBoard,
    buttonsToLoad,
    connectToSocket,
    audienceCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBoardId: boardId => {
      dispatch( stateBoardId(boardId) );
    },
    updateAudienceCount: audienceString => {
      dispatch( setAudienceCount(audienceString) );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
