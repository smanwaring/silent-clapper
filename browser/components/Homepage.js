import React from 'react';
import {Link, browserHistory, hashHistory} from 'react-router';
import HomeForm from '../containers/HomeForm';


class Homepage extends React.Component {
	constructor(props){
		super(props);
		this.handleIconClick = this.handleIconClick.bind(this);
		this.drawAction = this.drawAction.bind(this);
		this.addIcons = this.addIcons.bind(this);
	}

    handleIconClick(evt) {
     this.drawAction({icon: evt.currentTarget.dataset.icon});
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
                    <div>
                        <h1> Silent Salutations </h1>
                        
                        <div className="form-container"> 
                            <HomeForm/>
                        </div> 
                        
                        <div className="columns column-0"></div>
                        <div className="columns column-1"></div>
                        <div className="columns column-2"></div>
                        <div className="columns column-3"></div>
                        <div className="columns column-4"></div>
                        
                    </div>
                </div>
            


               <footer className="center-icons col-lg-12 col-xs-12 col-md-12 col-sm-12">
                    <button className="btn blue btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-sign-language">
                        <i className="fa fa-sign-language"></i>
                    </button>
                    <button className="btn red btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-frown-o">
                        <i className="fa fa-frown-o"></i>
                    </button>
                    <button className="btn gray btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-empire">
                        <i className="fa fa-empire"></i>
                    </button>
                    <button className="btn dark-blue btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-heart-o">
                        <i className="fa fa-heart-o"></i>
                    </button>
                    <button className="btn green btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-money fa-spin">
                        <i className="fa fa-money"></i>
                    </button>
                    <button className="btn pink btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-smile-o">
                        <i className="fa fa-smile-o"></i>
                    </button>
                    <button className="btn yellow btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-question">
                        <i className="fa fa-question"></i>
                    </button>
                    <button className="btn mint-green btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-thumbs-o-up">
                        <i className="fa fa-thumbs-o-up"></i>
                    </button>
                    <button className="btn orange btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-rebel">
                        <i className="fa fa-rebel" ></i>
                    </button>
                    <button className="btn purple btn-circle btn-xl" onClick={this.handleIconClick} data-icon="fa fa-bomb fa-spin">
                        <i className="fa fa-bomb"></i>
                    </button>
                </footer>
            



      </div> 
    )
  }
}

export default Homepage;



    //    <div>id="button-wrap" className="center-icons col-lg-12 col-xs-12 col-md-12 col-sm-12 navbar navbar-default navbar-fixed-bottom"</div>