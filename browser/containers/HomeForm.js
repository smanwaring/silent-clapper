import { connect } from 'react-redux';
import HomeForm from '../components/HomeForm';
import { showCreate, showJoin } from '../actions/homeform-actions';

const mapStateToProps = ({showCreateTab, showJoinTab}) => {
  return {
    showCreateTab,
    showJoinTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeShowCreateTab: bool => {
      dispatch(showCreate(bool));
    },
    changeShowJoinTab: bool => {
      dispatch(showJoin(bool));
    }
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeForm);
