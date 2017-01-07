import React from 'react';
import HomeForm from '../containers/HomeForm';


class PickButtons extends React.Component {
	constructor(props){
		super(props);
		this.handleIconClick = this.handleIconClick.bind(this);
        this.handleClapClick = this.handleClapClick.bind(this);
        this.handleFrownClick = this.handleFrownClick.bind(this);
        this.handleEmpireClick = this.handleEmpireClick.bind(this);
        this.handleHeartClick = this.handleHeartClick.bind(this);
        this.handleMoneyClick = this.handleMoneyClick.bind(this);
        this.handleSmileClick = this.handleSmileClick.bind(this);
        this.handleQuestionClick = this.handleQuestionClick.bind(this);
        this.handleThumbClick = this.handleThumbClick.bind(this);
        this.handleResistanceClick = this.handleResistanceClick.bind(this);
        this.handleBombClick = this.handleBombClick.bind(this);
	}

    handleIconClick(evt, color) {
        evt.preventDefault();
        let icon = evt.currentTarget.dataset.icon;
        let data = {icon: icon, color: color};
        if(this.props.picked.map(data => data.icon).indexOf(icon) < 0) {
            this.props.addButton(data);
        } else {
            this.props.removeButton(data);
        }
    }

    handleClapClick() {
       this.props.clapClicked(!this.props.buttonClass.clap);
    }
    handleFrownClick() {
       this.props.frownClicked(!this.props.buttonClass.frown);
    }
    handleEmpireClick() {
       this.props.empireClicked(!this.props.buttonClass.empire);
    }
    handleHeartClick() {
       this.props.heartClicked(!this.props.buttonClass.heart);
    }
    handleMoneyClick() {
       this.props.moneyClicked(!this.props.buttonClass.money);
    }
    handleSmileClick() {
       this.props.smileClicked(!this.props.buttonClass.smile);
    }
    handleQuestionClick() {
       this.props.questionClicked(!this.props.buttonClass.question);
    }
    handleThumbClick() {
       this.props.thumbClicked(!this.props.buttonClass.thumb);
    }
    handleResistanceClick() {
       this.props.resistanceClicked(!this.props.buttonClass.resistance);
    }
    handleBombClick() {
       this.props.bombClicked(!this.props.buttonClass.bomb);
    }

  render () {
      let addRemove = this.handleIconClick;
      let handleClapClick = this.handleClapClick;
      let basicClass = "btn btn-circle btn-xl btn-hover";
      let clapClass = "btn btn-circle btn-xl blue";
      let frownClass = "btn btn-circle btn-xl red";
      let empireClass = "btn btn-circle btn-xl gray";
      let heartClass = "btn btn-circle btn-xl dark-blue";
      let moneyClass = "btn btn-circle btn-xl green";
      let questionClass = "btn btn-circle btn-xl yellow";
      let smileClass = "btn btn-circle btn-xl pink";
      let thumbClass = "btn btn-circle btn-xl mint-green";
      let resistanceClass = "btn btn-circle btn-xl orange";
      let bombClass = "btn btn-circle btn-xl purple";
    return (
      <div>
        <h4 className="pick-no-margin">Pick your buttons</h4>
        <div className="col-lg-10 col-xs-10 col-md-10 col-sm-10 pick-body">
            <button className={this.props.buttonClass.clap ? clapClass : basicClass} onClick={(evt) => {addRemove(evt, 'blue'); this.handleClapClick()}} data-icon="fa fa-sign-language">
                <i className="fa fa-sign-language"></i>
            </button>
            <button className={this.props.buttonClass.frown ? frownClass : basicClass} onClick={(evt) => {addRemove(evt, 'red'); this.handleFrownClick()}} data-icon="fa fa-frown-o">
                <i className="fa fa-frown-o"></i>
            </button>
            <button className={this.props.buttonClass.empire ? empireClass : basicClass} onClick={(evt) => {addRemove(evt, 'gray'); this.handleEmpireClick()}} data-icon="fa fa-empire">
                <i className="fa fa-empire" data-icon="fa fa-empire"></i>
            </button>
            <button className={this.props.buttonClass.heart ? heartClass : basicClass} onClick={(evt) => {addRemove(evt, 'dark-blue'); this.handleHeartClick()}} data-icon="fa fa-heart-o">
                <i className="fa fa-heart-o" data-icon="fa fa-heart-o"></i>
            </button>
            <button className={this.props.buttonClass.money ? moneyClass : basicClass} onClick={(evt) => {addRemove(evt, 'green'); this.handleMoneyClick()} } data-icon="fa fa-money fa-spin">
                <i className="fa fa-money" data-icon="fa fa-money fa-spin"></i>
            </button>
            <button className={this.props.buttonClass.smile ? smileClass : basicClass} onClick={(evt) => {addRemove(evt, 'pink'); this.handleSmileClick()}  } data-icon="fa fa-smile-o">
                <i className="fa fa-smile-o" data-icon="fa fa-smile-o"></i>
            </button>
            <button className={this.props.buttonClass.question ? questionClass : basicClass} onClick={(evt) => {addRemove(evt, 'yellow'); this.handleQuestionClick()}  } data-icon="fa fa-question">
                <i className="fa fa-question" data-icon="fa fa-question"></i>
            </button>
            <button className={this.props.buttonClass.thumb ? thumbClass : basicClass} onClick={(evt) => {addRemove(evt, 'mint-green'); this.handleThumbClick()}  } data-icon="fa fa-thumbs-o-up">
                <i className="fa fa-thumbs-o-up" data-icon="fa fa-thumbs-o-up"></i>
            </button>
            <button className={this.props.buttonClass.resistance ? resistanceClass : basicClass} onClick={(evt) => {addRemove(evt, 'orange'); this.handleResistanceClick() }} data-icon="fa fa-rebel">
                <i className="fa fa-rebel" data-icon="fa fa-rebel"></i>
            </button>
            <button className={this.props.buttonClass.bomb ? bombClass : basicClass} onClick={(evt) => {addRemove(evt, 'purple'); this.handleBombClick()}} data-icon="fa fa-bomb fa-spin">
                <i className="fa fa-bomb" data-icon="fa fa-bomb fa-spin"></i>
            </button>
        </div>
      </div>
    )
  }
}

export default PickButtons;
