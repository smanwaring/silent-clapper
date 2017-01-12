import {connect} from 'react-redux';
import HomeForm from '../components/HomeForm';
import {  showCreate, hideCreate, showJoin, hideJoin } from '../actions';

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
		hideCreateTab: function(bool) {
			dispatch ( hideCreate(bool) );
		},
		showJoinTab: function(bool) {
			dispatch ( showJoin(bool) );
		},
		hideJoinTab: function(bool) {
			dispatch ( hideJoin(bool) );
		},
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeForm);
