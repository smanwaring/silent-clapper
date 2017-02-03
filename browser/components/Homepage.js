import React from 'react';
import HomeForm from '../containers/HomeForm';
import addIcons from '../utils/icon-animations';


class Homepage extends React.Component {
	constructor(props){
		super(props);
		this.handleIconClick = this.handleIconClick.bind(this);
		this.drawAction = this.drawAction.bind(this);
	}

    handleIconClick(evt) {
     this.drawAction({icon: evt.currentTarget.dataset.icon});
    }

	drawAction(icon) {
	  addIcons(icon.icon);
	}

  render () {
    return (
        // KAT: tabbing
      <div>
                <div id="wrap">
                    <div>
                        <h1 className="top-margin"> Silent Salutations </h1>
                            <div className="social-container">
                                <a className="fa fa-github fa-2x" href="https://github.com/smanwaring/silent-clapper"></a>
                                <a className="fa fa-twitter fa-2x" href="https://twitter.com/intent/tweet?text=Silent+Applauding+%3E+Regular+Applauding.+%F0%9F%91%8F+SilentSalutations.com.+"></a>
                            </div>
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


               <footer>
                   {/*KAT: you could store all this data in a few constants up top and then loop through it all to produce this? Definitely not necessary, but might be more dry? I don't really know though*/}
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
    );
  }
}

export default Homepage;
