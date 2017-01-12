
import React, { Component } from 'react';
import PickButtons from '../containers/PickButtons';
import {Link, browserHistory, hashHistory} from 'react-router';

class CreateBoard extends Component {
    constructor(props){
        super(props);
        this.generateBoardId = this.generateBoardId.bind(this);
    }


    componentDidUpdate(){ 
        const self = this;
        if(this.props.showPickButtonError){
          setTimeout(function() {
          self.props.pickButtonsError(false);
           }, 2000)       
        }
    }


    generateBoardId(evt){
        evt.preventDefault();
        if(this.props.buttons.length < 1){
            this.props.pickButtonsError(true);
        } else {
            let boardId = Math.floor(Math.random()*89999+10000);
            let details = {
                path: boardId,
                buttons: this.props.buttons
            }
            this.props.addBoard(details);
        }
    }

    render() {
        const { boardId, showPickButtonError, buttons, showCreate } = this.props;
        return (
            <form role="form" style={{display: showCreate ? 'block' : 'none' }}>                 
                {this.props && boardId ? 
                            <div>
                            <h4>{`Here is your board #: ${this.props.boardId}`}</h4>
                            <div className="col-sm-6 col-sm-offset-3">
                                <Link to={`/${boardId}`}><button type="submit" tabIndex="4" className="form-control btn btn-register">GO TO MY BOARD</button></Link>
                                <button tabIndex="4" className="form-control btn btn-register">GENERATE A NEW BOARD</button>
                            </div>
                        </div>
                                :
                        <div className="form-group">
                            <PickButtons/>
                            <div className="row">
                                <div>
                                    <button id="register-submit" tabIndex="4" className="form-control btn btn-register" onClick={this.generateBoardId}> Generate My Board Link </button>
                                </div>
                                    {showPickButtonError && buttons.length < 1 ? <div>Please select some buttons!</div> : ''}
                            </div>
                        </div> 
                        } 
            </form>
        )
    }
}

export default CreateBoard;
