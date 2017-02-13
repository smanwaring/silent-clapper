import { connect } from 'react-redux';
import CreateBoard from '../components/CreateBoard';
import { addBoard, pickButtonError, stateBoardId, clearAllButtons, clearAllSelectedButtons } from '../actions/createboard-actions';

function mapStateToProps({ buttonsPicked, generatedBoard, showCreateTab, showPickButtonError }) {
  return {
    buttonsPicked,
    generatedBoard,
    showCreateTab,
    showPickButtonError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addBoard: (details) => {
      dispatch(addBoard(details));
    },
    pickButtonsError: (bool) => {
      dispatch(pickButtonError(bool));
    },
    clearGeneratedboard: (details) => {
      dispatch(stateBoardId(details));
      dispatch(clearAllButtons());
      dispatch(clearAllSelectedButtons());
    },
  };

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBoard);
