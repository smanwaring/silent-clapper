import { connect } from 'react-redux';
import Homepage from '../components/Homepage';


function mapStateToProps( {buttonsAvailable} ){
	return {
		buttonsAvailable
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
