import { connect } from 'react-redux';
import Homepage from '../components/Homepage';


function mapStateToProps(state){
	return {
		buttonsAvailable: state.buttonsAvailable
	};
}

function mapDispatchToProps(dispatch){
	return {

	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Homepage);
