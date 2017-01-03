import React from 'react';
import HomeForm from '../containers/HomeForm';


class PickButtons extends React.Component {
	constructor(props){
		super(props);
		this.handleIconClick = this.handleIconClick.bind(this);
	}

    handleIconClick(evt) {
        let icon = evt.currentTarget.dataset.icon;
        if (this.props.picked.indexOf(icon) > -1){
            this.props.addButton(icon);
        } else {
            this.props.removeButton(icon);
        }
    }

  render () {
      let addRemove = this.handleIconClick;
    return (
      <div>
        <h4>Pick your buttons</h4>
        <div className="col-lg-10 col-xs-10 col-md-10 col-sm-10 pick-body">
            <button className="btn blue btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-sign-language">
                <i className="fa fa-sign-language"></i>
            </button>
            <button className="btn red btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-frown-o">
                <i className="fa fa-frown-o"></i>
            </button>
            <button className="btn gray btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-empire">
                <i className="fa fa-empire" data-icon="fa fa-empire"></i>
            </button>
            <button className="btn dark-blue btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-heart-o">
                <i className="fa fa-heart-o" data-icon="fa fa-heart-o"></i>
            </button>
            <button className="btn green btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-money fa-spin">
                <i className="fa fa-money" data-icon="fa fa-money fa-spin"></i>
            </button>
            <button className="btn pink btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-smile-o">
                <i className="fa fa-smile-o" data-icon="fa fa-smile-o"></i>
            </button>
            <button className="btn yellow btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-question">
                <i className="fa fa-question" data-icon="fa fa-question"></i>
            </button>
            <button className="btn mint-green btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-thumbs-o-up">
                <i className="fa fa-thumbs-o-up" data-icon="fa fa-thumbs-o-up"></i>
            </button>
            <button className="btn orange btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-rebel">
                <i className="fa fa-rebel" data-icon="fa fa-rebel"></i>
            </button>
            <button className="btn purple btn-circle btn-xl" onClick={addRemove} data-icon="fa fa-bomb fa-spin">
                <i className="fa fa-bomb" data-icon="fa fa-bomb fa-spin"></i>
            </button>
        </div>
      </div>
    )
  }
}

export default PickButtons;
