import React from 'react';

class PickButtons extends React.Component {
  constructor(props){
    super(props);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.deselectAllinDB = this.deselectAllinDB.bind(this);
    this.selectAllInDB = this.selectAllinDB.bind(this);
  }


  handleIconClick(evt, color, index) {
    evt.preventDefault();
    const icon = evt.currentTarget.dataset.icon;
    const data = {icon: icon, color: color};

    if (this.props.buttonsPicked.map(data => data.icon).indexOf(icon) < 0) {
      this.props.addButton(data);
    } else {
      this.props.removeButton(data);
    }
    if (!this.props.buttonsAvailable[index]["isSelected"]) {
      this.props.toggleSelect(false);
    }
    this.props.toggleButton(!this.props.buttonsAvailable[index]["isSelected"], index);
  }

  selectAllinDB() {
    const pickedArray = this.props.buttonsPicked.map(data => data.icon);
    const notSelectedArray = this.props.buttonsAvailable.filter( item => pickedArray.indexOf(item.icon) < 0);

    notSelectedArray.forEach(item => {this.props.addButton(item);});
    this.props.toggleAllButtons(true);
    this.props.toggleSelect(true);
  }

  deselectAllinDB() {
    this.props.buttonsAvailable.forEach( (item, i) => {
      this.props.removeButton(item);
      this.props.toggleAllButtons(false);
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
    const { buttonsAvailable } = this.props;
    const addRemove = this.handleIconClick;
    const baseClass = 'btn btn btn-circle btn-md';
    const unselectedClass = 'btn btn-circle btn-md btn-hover nuetralbg';
    const allButtonsOn = this.props.buttonsPicked.length === 10;
    return (
      <div>
        <h4 className="pick-no-margin">Pick your buttons</h4>
            <div className="checkbox">
                <label>
                    <input type="checkbox" checked={allButtonsOn ? 'checked' : '' } onClick={this.handleCheck} /> select all
                </label>
            </div>
            <div className="button-spacer">
            {buttonsAvailable && buttonsAvailable.map((btn, i) => {
                return (
                    <button key={btn.nickname} className={ btn.isSelected ? `${baseClass} ${btn.color}` : unselectedClass } onClick={ evt => {addRemove(evt, btn.color, i)}} data-icon={btn.icon}>
                       <i className={btn.icon.replace('fa-spin', '' )} />
                    </button>
                );
            })}
        </div>
      </div>
    );
  }
}

export default PickButtons;


