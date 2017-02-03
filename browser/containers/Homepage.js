import {connect} from 'react-redux';
import Homepage from '../components/Homepage';

// I think you can remove mapStateToProps and mapDispatchToProps completely and just write connect(null,null)(Homepage) 

function mapStateToProps(state){
	return {

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
