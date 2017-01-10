import React from 'react';
import {Link, browserHistory, hashHistory} from 'react-router';
import HomeForm from '../containers/HomeForm';


class Room extends React.Component {
	constructor(props){
		super(props);
		this.handleIconClick = this.handleIconClick.bind(this);
		this.drawAction = this.drawAction.bind(this);
		this.addIcons = this.addIcons.bind(this);
	}

	componentDidMount(){
		let component = this;
		 // initialize client socket
		 this.socket = io.connect();
         //join room
         this.socket.emit('wantToJoinRoom', component.props.currentBoard || component.props.boardId);
         console.log("currentBoard", component.props.currentBoard)
         console.log("boardId", component.props.boardId)
		 // emitted from server, caught here with the icon and calls drawAction which initiates CSS animations!
		 this.socket.on('showAction', function(icon){
		 	// hey, someone else clicked an icon and we found out from the server
		    component.drawAction(icon);
		 })
		 //emitted from server, caught here with the current num of people connected
		 this.socket.on('connectionEvent', function(numPeople) {
    		var audience = "person";
    		if(numPeople > 1)  {
        		audience = "people";
    		}
    		if(numPeople > 0) {
    			$('#num-people span').text(numPeople + " " + audience + ' connected')
    		}
  		})
	}

	handleIconClick(evt) {
		this.socket.emit('registerAction', {icon: evt.currentTarget.dataset.icon});
	}

	drawAction(icon) {
		this.addIcons(icon.icon);
	}

	addIcons(icon) {
		var columns = [].slice.call(document.querySelectorAll('.columns'));
		var lowRange = 1.2,
            highRange = 1.6,
            uniqueIdentifier = Math.floor((Math.random() * 100) + 1),
            flowArray = ["flowOne", "flowTwo", "flowThree"],
            colArray = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"],
            speed = (Math.random() * (highRange - lowRange) + lowRange).toFixed(1)

        function randomColumnContainer () {
            var toReturn = ".column-" + Math.floor(Math.random() * columns.length);
            return toReturn;
        }

        //creates icon element with necessary styling classes + icon that was passed in
        $('<div class="column part-' + uniqueIdentifier + " " + colArray[Math.floor((Math.random() * 6))] + '" style="font-size:' + Math.floor(Math.random() * (50 - 22) + 80) + 'px;"><i class="' + icon + '"></i></div>')
            .appendTo(randomColumnContainer()).css({
                animation: "" + flowArray[Math.floor((Math.random() * 3))] + " " + speed + "s linear"
            });


        $(".part-" + uniqueIdentifier).show();
        
        setTimeout(function() {
            $(".part-" + uniqueIdentifier).remove()
        }, speed * 900)
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
        <div id="button-wrap" className="center-icons">
            {this.props.buttons && this.props.buttons.map((button, i) => {
                return (
                    <button key={i} className={`btn btn-circle btn-xl ${button.color}`} onClick={this.handleIconClick} data-icon={button.icon}>
                        <i className={button.icon.replace("fa-spin", "")}></i>
                    </button>
                )
            })}
        </div>
      </div>
    )
  }
};

export default Room;