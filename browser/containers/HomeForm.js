import {connect} from 'react-redux';
import HomeForm from '../components/HomeForm';
import {  showCreate, showJoin } from '../actions/homeform-actions';

function mapStateToProps(state){
	return {
		showCreate: state.showCreateTab,
		showJoin: state.showJoinTab
	};
}

function mapDispatchToProps(dispatch){
	return {
		showCreateTab: function(bool) {
			dispatch ( showCreate(bool) );
		},
		showJoinTab: function(bool) {
			dispatch ( showJoin(bool) );
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeForm);
