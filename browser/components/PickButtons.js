import React from 'react';

class PickButtons extends React.Component {
	constructor(props){
		super(props);
		this.handleIconClick = this.handleIconClick.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.deselectAllinDB = this.deselectAllinDB.bind(this);
        this.selectAllInDB = this.selectAllinDB.bind(this);
	}


    handleIconClick(evt, color, shortIcon) {
        evt.preventDefault();
        let icon = evt.currentTarget.dataset.icon;
        let data = {icon: icon, color: color};
        
        //add to db check
        if (this.props.buttonsPicked.map(data => data.icon).indexOf(icon) < 0) {
            this.props.addButton(data);
        } else {
            this.props.removeButton(data);
        }
        //front end view
        if (!this.props.buttonSelected[shortIcon]) {
            this.props.toggleSelect(false);
        }
        this.props.toggleButton(!this.props.buttonSelected[shortIcon], shortIcon);
    }

    selectAllinDB() {
        const pickedArray = this.props.buttonsPicked.map(data => data.icon);
        const notSelectedArray = this.props.buttonsAvailable.filter( item => pickedArray.indexOf(item.icon) < 0);
        notSelectedArray.forEach(item => {
            this.props.addButton(item);
        });

        this.props.buttonsAvailable.forEach(item => {
            this.props.toggleButton(true, item.shortIcon);
        });

        this.props.toggleSelect(true);
    }

    deselectAllinDB() {
        this.props.buttonsAvailable.forEach(item => {
            this.props.removeButton(item);
            this.props.toggleButton(false, item.shortIcon);
            this.props.toggleSelect(false);
        });
    }


    handleCheck(){
        if (this.props.allButtonsSelected){
            this.deselectAllinDB();
        } else {
            this.selectAllinDB();
        }
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
                    <input type="checkbox" checked={allButtonsOn ? 'checked' : '' } onClick={this.handleCheck} /> select all
                </label>
            </div>
        <div className="button-spacer">
            <button className={buttonSelected.clap ? clapClass : basicClass} onClick={evt => {addRemove(evt, 'blue', 'clap')}} data-icon="fa fa-sign-language">
                <i className="fa fa-sign-language" />
            </button>
            <button className={buttonSelected.frown ? frownClass : basicClass} onClick={(evt) => {addRemove(evt, 'red', 'frown')}} data-icon="fa fa-frown-o">
                <i className="fa fa-frown-o" />
            </button>
            <button className={buttonSelected.empire ? empireClass : basicClass} onClick={(evt) => {addRemove(evt, 'gray', 'empire')}} data-icon="fa fa-empire">
                <i className="fa fa-empire" />
            </button>
            <button className={buttonSelected.heart ? heartClass : basicClass} onClick={(evt) => {addRemove(evt, 'dark-blue', 'heart')}} data-icon="fa fa-heart-o">
                <i className="fa fa-heart-o" />
            </button>
            <button className={buttonSelected.money ? moneyClass : basicClass} onClick={(evt) => {addRemove(evt, 'green', 'money')}} data-icon="fa fa-money fa-spin">
                <i className="fa fa-money" />
            </button>
            <button className={buttonSelected.smile ? smileClass : basicClass} onClick={(evt) => {addRemove(evt, 'pink', 'smile')}} data-icon="fa fa-smile-o">
                <i className="fa fa-smile-o" />
            </button>
            <button className={buttonSelected.question ? questionClass : basicClass} onClick={(evt) => {addRemove(evt, 'yellow', 'question')}} data-icon="fa fa-question">
                <i className="fa fa-question" />
            </button>
            <button className={buttonSelected.thumb ? thumbClass : basicClass} onClick={(evt) => {addRemove(evt, 'mint-green', 'thumb')}} data-icon="fa fa-thumbs-o-up">
                <i className="fa fa-thumbs-o-up" />
            </button>
            <button className={buttonSelected.resistance ? resistanceClass : basicClass} onClick={(evt) => {addRemove(evt, 'orange', 'resistance')}} data-icon="fa fa-rebel">
                <i className="fa fa-rebel" />
            </button>
            <button className={buttonSelected.bomb ? bombClass : basicClass} onClick={(evt) => {addRemove(evt, 'purple', 'bomb')}} data-icon="fa fa-bomb fa-spin">
                <i className="fa fa-bomb" />
            </button>
        </div>
      </div>
    );
  }
}

export default PickButtons;
