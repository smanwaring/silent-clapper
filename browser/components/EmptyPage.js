import React from 'react';
import { Link } from 'react-router';

export default class EmptyPage extends React.Component {
    constructor(props){
		super(props);
        this.interval = null;
		this.drawAction = this.drawAction.bind(this);
		this.addIcons = this.addIcons.bind(this);
        this.startInterval  = this.startInterval.bind(this);
	}

    componentDidMount(){
        this.interval = setInterval(this.startInterval, 500);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    startInterval(){
        this.drawAction( {icon: 'fa fa-frown-o'} );
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
            $(".part-" + uniqueIdentifier).remove();
        }, speed * 900);
	} 

    render() {
        return (
            <div id="wrap">
                <h1> Silent Salutations </h1>
                    <div className="columns column-0"></div>
                    <div className="columns column-1"></div>
                    <div className="columns column-2"></div>
                    <div className="columns column-3"></div>
                    <div className="columns column-4"></div>
                <button className="btn red btn-circle btn-xl" data-icon="fa fa-frown-o">
                    <i className="fa fa-frown-o"></i>
                 </button>
                <h1 className="textbold">Oops! That room doesn't exist...</h1>
                <Link to={'/'}><h1> Go back home</h1></Link>
            </div>
        );
    }
}


module.exports = EmptyPage;
