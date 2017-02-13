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
        if (this.props.buttonsPicked.map(data => data.icon).indexOf(icon) < 0) {
            this.props.addButton(data);
        } else {
            this.props.removeButton(data);
        }
    }

    selectAllinDB() {
        const pickedArray = this.props.buttonsPicked.map(data => data.icon);
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
        if (this.props.allButtonsSelected){
            this.deselectAllinDB();
            this.props.selectAll(!this.props.allButtonsSelected);
        } else {
            this.selectAllinDB();
            this.props.selectAll(!this.props.allButtonsSelected);
        }
    }

    handleClapClick() {
        if (!this.props.buttonSelected.clap === false){
            this.props.toggleSelect(false);
        }

       this.props.clapClicked(!this.props.buttonSelected.clap);
    }
    handleFrownClick() {
      if (!this.props.buttonSelected.frown === false){
            this.props.toggleSelect(false);
        }

       this.props.frownClicked(!this.props.buttonSelected.frown);
    }
    handleEmpireClick() {
        if (!this.props.buttonSelected.empire === false){
            this.props.toggleSelect(false);
        }

       this.props.empireClicked(!this.props.buttonSelected.empire);
    }
    handleHeartClick() {
        if (!this.props.buttonSelected.heart === false){
            this.props.toggleSelect(false);
        }

       this.props.heartClicked(!this.props.buttonSelected.heart);
    }
    handleMoneyClick() {
        if (!this.props.buttonSelected.money === false){
            this.props.toggleSelect(false);
        }

       this.props.moneyClicked(!this.props.buttonSelected.money);
    }
    handleSmileClick() {
        if (!this.props.buttonSelected.smile === false){
            this.props.toggleSelect(false);
        }

       this.props.smileClicked(!this.props.buttonSelected.smile);
    }
    handleQuestionClick() {
        if (!this.props.buttonSelected.question === false){
            this.props.toggleSelect(false);
        }

       this.props.questionClicked(!this.props.buttonSelected.question);
    }
    handleThumbClick() {
        if (!this.props.buttonSelected.thumb === false){
            this.props.toggleSelect(false);
        }

       this.props.thumbClicked(!this.props.buttonSelected.thumb);
    }
    handleResistanceClick() {
        if (!this.props.buttonSelected.resistance === false){
            this.props.toggleSelect(false);
        }

       this.props.resistanceClicked(!this.props.buttonSelected.resistance);
    }
    handleBombClick() {
        if (!this.props.buttonSelected.bomb === false){
            this.props.toggleSelect(false);
        }

       this.props.bombClicked(!this.props.buttonSelected.bomb);
    }

  render () {
      const { buttonSelected } = this.props;
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
      let allButtonsOn = this.props.buttonsPicked.length === 10;
    return (
      <div>
        <h4 className="pick-no-margin">Pick your buttons</h4>
            <div className="checkbox">
                <label>
                    <input type="checkbox" checked={allButtonsOn ? 'checked' : '' } onChange={this.handleCheck} /> select all
                </label>
            </div>
        <div className="button-spacer">
            <button className={buttonSelected.clap ? clapClass : basicClass} onClick={(evt) => {addRemove(evt, 'blue'); this.handleClapClick()}} data-icon="fa fa-sign-language">
                <i className="fa fa-sign-language" />
            </button>
            <button className={buttonSelected.frown ? frownClass : basicClass} onClick={(evt) => {addRemove(evt, 'red'); this.handleFrownClick()}} data-icon="fa fa-frown-o">
                <i className="fa fa-frown-o" />
            </button>
            <button className={buttonSelected.empire ? empireClass : basicClass} onClick={(evt) => {addRemove(evt, 'gray'); this.handleEmpireClick()}} data-icon="fa fa-empire">
                <i className="fa fa-empire" />
            </button>
            <button className={buttonSelected.heart ? heartClass : basicClass} onClick={(evt) => {addRemove(evt, 'dark-blue'); this.handleHeartClick()}} data-icon="fa fa-heart-o">
                <i className="fa fa-heart-o" />
            </button>
            <button className={buttonSelected.money ? moneyClass : basicClass} onClick={(evt) => {addRemove(evt, 'green'); this.handleMoneyClick()}} data-icon="fa fa-money fa-spin">
                <i className="fa fa-money" />
            </button>
            <button className={buttonSelected.smile ? smileClass : basicClass} onClick={(evt) => {addRemove(evt, 'pink'); this.handleSmileClick()}} data-icon="fa fa-smile-o">
                <i className="fa fa-smile-o" />
            </button>
            <button className={buttonSelected.question ? questionClass : basicClass} onClick={(evt) => {addRemove(evt, 'yellow'); this.handleQuestionClick()}} data-icon="fa fa-question">
                <i className="fa fa-question" />
            </button>
            <button className={buttonSelected.thumb ? thumbClass : basicClass} onClick={(evt) => {addRemove(evt, 'mint-green'); this.handleThumbClick()}} data-icon="fa fa-thumbs-o-up">
                <i className="fa fa-thumbs-o-up" />
            </button>
            <button className={buttonSelected.resistance ? resistanceClass : basicClass} onClick={(evt) => {addRemove(evt, 'orange'); this.handleResistanceClick()}} data-icon="fa fa-rebel">
                <i className="fa fa-rebel" />
            </button>
            <button className={buttonSelected.bomb ? bombClass : basicClass} onClick={(evt) => {addRemove(evt, 'purple'); this.handleBombClick()}} data-icon="fa fa-bomb fa-spin">
                <i className="fa fa-bomb" />
            </button>
        </div>
      </div>
    );
  }
}

export default PickButtons;
