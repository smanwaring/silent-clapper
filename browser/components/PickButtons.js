import React from 'react';


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
        this.handleCheck = this.handleCheck.bind(this);
	}


    handleIconClick(evt, color) {
        evt.preventDefault();
        let icon = evt.currentTarget.dataset.icon;
        let data = {icon: icon, color: color};
        if (this.props.picked.map(data => data.icon).indexOf(icon) < 0) {
            this.props.addButton(data);
        } else {
            this.props.removeButton(data);
        }
    }

    selectAllinDB() {
        const pickedArray = this.props.picked.map(data => data.icon);
        const notSelectedArray = this.props.buttonsAvailable.filter( item => pickedArray.indexOf(item.icon) < 0);
        notSelectedArray.forEach(item => {
            this.props.addButton(item);
        });
    }


      deselectAllinDB() {
        this.props.buttonsAvailable.forEach(item => {
            this.props.removeButton(item);
        });
    }


    handleCheck(){
        if (this.props.allSelected){
            this.deselectAllinDB();
            this.props.selectAll(!this.props.allSelected);
        } else {
            this.selectAllinDB();
            this.props.selectAll(!this.props.allSelected);
        }
    }

    handleClapClick() {
        if (!this.props.buttonClass.clap === false){
            this.props.toggleSelect(false);
        }

       this.props.clapClicked(!this.props.buttonClass.clap);
    }
    handleFrownClick() {
      if (!this.props.buttonClass.frown === false){
            this.props.toggleSelect(false);
        }

       this.props.frownClicked(!this.props.buttonClass.frown);
    }
    handleEmpireClick() {
        if (!this.props.buttonClass.empire === false){
            this.props.toggleSelect(false);
        }

       this.props.empireClicked(!this.props.buttonClass.empire);
    }
    handleHeartClick() {
        if (!this.props.buttonClass.heart === false){
            this.props.toggleSelect(false);
        }

       this.props.heartClicked(!this.props.buttonClass.heart);
    }
    handleMoneyClick() {
        if (!this.props.buttonClass.money === false){
            this.props.toggleSelect(false);
        }

       this.props.moneyClicked(!this.props.buttonClass.money);
    }
    handleSmileClick() {
        if (!this.props.buttonClass.smile === false){
            this.props.toggleSelect(false);
        }

       this.props.smileClicked(!this.props.buttonClass.smile);
    }
    handleQuestionClick() {
        if (!this.props.buttonClass.question === false){
            this.props.toggleSelect(false);
        }

       this.props.questionClicked(!this.props.buttonClass.question);
    }
    handleThumbClick() {
        if (!this.props.buttonClass.thumb === false){
            this.props.toggleSelect(false);
        }

       this.props.thumbClicked(!this.props.buttonClass.thumb);
    }
    handleResistanceClick() {
        if (!this.props.buttonClass.resistance === false){
            this.props.toggleSelect(false);
        }

       this.props.resistanceClicked(!this.props.buttonClass.resistance);
    }
    handleBombClick() {
        if (!this.props.buttonClass.bomb === false){
            this.props.toggleSelect(false);
        }

       this.props.bombClicked(!this.props.buttonClass.bomb);
    }

  render () {
      const { buttonClass } = this.props;
      let addRemove = this.handleIconClick;
      let basicClass = 'btn btn-circle btn-md btn-hover nuetralbg';
      let clapClass = 'btn btn-circle btn-md blue';
      let frownClass = 'btn btn-circle btn-md red';
      let empireClass = 'btn btn-circle btn-md gray';
      let heartClass = 'btn btn-circle btn-md dark-blue';
      let moneyClass = 'btn btn-circle btn-md green';
      let questionClass = 'btn btn-circle btn-md yellow';
      let smileClass = 'btn btn-circle btn-md pink';
      let thumbClass = 'btn btn-circle btn-md mint-green';
      let resistanceClass = 'btn btn-circle btn-md orange';
      let bombClass = 'btn btn-circle btn-md purple';
      let allButtonsOn = this.props.picked.length === 10;
    return (
      <div>
        <h4 className="pick-no-margin">Pick your buttons</h4>
            <div className="checkbox">
                <label>
                <input type="checkbox" checked={allButtonsOn ? 'checked' : '' } onChange={this.handleCheck}/> select all
                </label>
            </div>
        <div className="button-spacer">
            <button className={buttonClass.clap ? clapClass : basicClass} onClick={(evt) => {addRemove(evt, 'blue'); this.handleClapClick()}} data-icon="fa fa-sign-language">
                <i className="fa fa-sign-language"></i>
            </button>
            <button className={buttonClass.frown ? frownClass : basicClass} onClick={(evt) => {addRemove(evt, 'red'); this.handleFrownClick()}} data-icon="fa fa-frown-o">
                <i className="fa fa-frown-o"></i>
            </button>
            <button className={buttonClass.empire ? empireClass : basicClass} onClick={(evt) => {addRemove(evt, 'gray'); this.handleEmpireClick()}} data-icon="fa fa-empire">
                <i className="fa fa-empire" data-icon="fa fa-empire"></i>
            </button>
            <button className={buttonClass.heart ? heartClass : basicClass} onClick={(evt) => {addRemove(evt, 'dark-blue'); this.handleHeartClick()}} data-icon="fa fa-heart-o">
                <i className="fa fa-heart-o" data-icon="fa fa-heart-o"></i>
            </button>
            <button className={buttonClass.money ? moneyClass : basicClass} onClick={(evt) => {addRemove(evt, 'green'); this.handleMoneyClick()} } data-icon="fa fa-money fa-spin">
                <i className="fa fa-money" data-icon="fa fa-money fa-spin"></i>
            </button>
            <button className={buttonClass.smile ? smileClass : basicClass} onClick={(evt) => {addRemove(evt, 'pink'); this.handleSmileClick()}  } data-icon="fa fa-smile-o">
                <i className="fa fa-smile-o" data-icon="fa fa-smile-o"></i>
            </button>
            <button className={buttonClass.question ? questionClass : basicClass} onClick={(evt) => {addRemove(evt, 'yellow'); this.handleQuestionClick()}  } data-icon="fa fa-question">
                <i className="fa fa-question" data-icon="fa fa-question"></i>
            </button>
            <button className={buttonClass.thumb ? thumbClass : basicClass} onClick={(evt) => {addRemove(evt, 'mint-green'); this.handleThumbClick()}  } data-icon="fa fa-thumbs-o-up">
                <i className="fa fa-thumbs-o-up" data-icon="fa fa-thumbs-o-up"></i>
            </button>
            <button className={buttonClass.resistance ? resistanceClass : basicClass} onClick={(evt) => {addRemove(evt, 'orange'); this.handleResistanceClick() }} data-icon="fa fa-rebel">
                <i className="fa fa-rebel" data-icon="fa fa-rebel"></i>
            </button>
            <button className={buttonClass.bomb ? bombClass : basicClass} onClick={(evt) => {addRemove(evt, 'purple'); this.handleBombClick()}} data-icon="fa fa-bomb fa-spin">
                <i className="fa fa-bomb" data-icon="fa fa-bomb fa-spin"></i>
            </button>
        </div>
      </div>
    )
  }
}

export default PickButtons;
