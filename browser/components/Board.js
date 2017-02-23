import React from 'react';
import { Link } from 'react-router';
import HomeForm from '../containers/HomeForm';
import addIcons from '../utils/icon-animations';
import Columns from './Columns';
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
  this.socket.emit('wantToJoinRoom', component.props.currentBoard || component.props.generatedBoard);
    // emitted from server, caught here with the icon and calls drawAction which initiates CSS animations!
  this.socket.on('showAction', (icon) => {
    // hey, someone else clicked an icon and we found out from the server
    component.drawAction(icon);
  });
  //emitted from server, caught here with the current num of people connected
  this.socket.on('connectionEvent', (numPeople) => {
    var audience = 'person';
      if (numPeople > 1)  {
        audience = 'people';
      }
      if (numPeople > 0) {
        this.props.updateAudienceCount(`${numPeople} ${audience} connected`);
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
    const { audienceCount } = this.props;
    return (
      <div>
        <div id="wrap">
          <h1> Silent Salutations</h1>
          <div id="num-people">
            <span>{ audienceCount ? audienceCount : 'audience connecting...' }</span>
          </div>
          <Columns />
        </div>
        <footer>
          {this.props.buttonsToLoad && this.props.buttonsToLoad.map((button, i) => {
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
