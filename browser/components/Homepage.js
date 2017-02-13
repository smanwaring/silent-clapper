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
      const { buttonsAvailable } = this.props;
    return (
      <div>
        <div id="wrap">
            <div>
                <h1 className="top-margin"> Silent Salutations </h1>
                    <div className="social-container">
                        <a className="fa fa-github fa-2x" href="https://github.com/smanwaring/silent-clapper" />
                        <a className="fa fa-twitter fa-2x" href="https://twitter.com/intent/tweet?text=Silent+Applauding+%3E+Regular+Applauding.+%F0%9F%91%8F+SilentSalutations.com.+" />
                    </div>
                <div className="form-container">
                    <HomeForm />
                </div>
                <div className="columns column-0" />
                <div className="columns column-1" />
                <div className="columns column-2" />
                <div className="columns column-3" />
                <div className="columns column-4" />
            </div>
        </div>
        <footer>
            {buttonsAvailable && buttonsAvailable.map((btn) => {
                return (
                    <button key={btn.icon} className={`btn btn-circle btn-xl ${btn.color}`} onClick={this.handleIconClick} data-icon={btn.icon}>
                        <i className={btn.icon.replace('fa-spin', '' )} />
                    </button>
                );
            })}
        </footer>
      </div>
    );
  }
}

export default Homepage;
