import { connect } from 'react-redux';
import Homepage from '../components/Homepage';


const mapStateToProps = ( {buttonsAvailable} ) => {
	return {
		buttonsAvailable
	};
};

const mapDispatchToProps = null;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Homepage);
