import React from 'react';
import { Link } from 'react-router';
import HomeForm from '../containers/HomeForm';
import addIcons from '../utils/icon-animations';
// just like require-ish import '../file/..'


class Board extends React.Component {
	constructor(props){
		super(props);
		this.handleIconClick = this.handleIconClick.bind(this);
		this.drawAction = this.drawAction.bind(this);
	}

	componentDidMount(){
		let component = this;
		// initialize client socket
		this.socket = io.connect();
		//join room
		this.socket.emit('wantToJoinRoom', component.props.currentBoard || component.props.boardId);
		// emitted from server, caught here with the icon and calls drawAction which initiates CSS animations!
		this.socket.on('showAction', function(icon){
		// hey, someone else clicked an icon and we found out from the server
			component.drawAction(icon);
		});
		 //emitted from server, caught here with the current num of people connected
		this.socket.on('connectionEvent', function(numPeople) {
			var audience = 'person';
			if (numPeople > 1)  {
				audience = 'people';
			}
			if (numPeople > 0) {
				document.querySelector('#num-people span').textContent = `${numPeople} ${audience} connected`;
			}
		});
	}

	handleIconClick(evt) {
		this.socket.emit('registerAction', {icon: evt.currentTarget.dataset.icon});
	}

	drawAction(icon) {
		addIcons(icon.icon);
	}

  render () {
    return (
      <div>
        <div id="wrap">
			<h1> Silent Salutations </h1>
			<div id="num-people">
				<span>audience connecting...</span>
			</div>
			<div className="columns column-0"></div>
			<div className="columns column-1"></div>
			<div className="columns column-2"></div>
			<div className="columns column-3"></div>
			<div className="columns column-4"></div>
        </div>

        <footer>
            {this.props.buttons && this.props.buttons.map((button, i) => {
                return (
                    <button key={i} className={`btn btn-circle btn-xl ${button.color}`} onClick={this.handleIconClick} data-icon={button.icon}>
                        <i className={button.icon.replace('fa-spin', '')}></i>
                    </button>
                );
            })}
        </footer>
	</div>
    );
  }
}

export default Board;
