
import React, { Component } from 'react';
import PickButtons from '../containers/PickButtons';
import { Link } from 'react-router';

class CreateBoard extends Component {
    constructor(props){
        super(props);
        // KAT: these bindings could be removed if you rewrite components as React.createClass
        this.generateBoardId = this.generateBoardId.bind(this);
        this.clearGeneratedboard = this.clearGeneratedboard.bind(this);
    }


    componentDidUpdate(){
        const self = this;
        // KAT: changed "this"" to "self"" so that it stays consistent within the function, or maybe change all back to "this"?
        if (self.props.showPickButtonError){
          setTimeout(function() {
          self.props.pickButtonsError(false);
           }, 2000);
        }
    }


    generateBoardId(evt){
        evt.preventDefault();
        if (this.props.buttons.length < 1){
            this.props.pickButtonsError(true);
        } else {
            let boardId = Math.floor(Math.random()*89999+10000);
            let details = {
                path: boardId,
                buttons: this.props.buttons
            };
            this.props.addBoard(details);
        }
    }

    clearGeneratedboard(evt){
        evt.preventDefault();
        this.props.clearGeneratedboard('');
    }

    render() {
        const { generatedBoard, showPickButtonError, buttons, showCreate } = this.props;
        return (
            <form role="form" style={{display: showCreate ? 'block' : 'none' }}> 
                {/* KAT: Tabbing here doesn't look consistent*/}                
                {this.props && generatedBoard ? 
                            <div>
                            <h4>{`Here is your board #: ${generatedBoard}`}</h4>
                            <div className="col-sm-6 col-sm-offset-3">
                                <Link to={`/${generatedBoard}`}><button type="submit" tabIndex="4" className="form-control btn btn-create">GO TO MY BOARD</button></Link>
                                <h5>OR</h5>
                                <button tabIndex="4"  onClick={this.clearGeneratedboard} className="form-control btn btn-create-new">GENERATE A NEW BOARD</button>
                            </div>
                        </div>
                                :
                        <div className="form-group">
                            <PickButtons/>
                            <div className="row">
                            {showPickButtonError && buttons.length < 1 ? <div>Please select some buttons!</div> : ''}
                                <div className="col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
                                    <button tabIndex="4" className="form-control btn btn-create" onClick={this.generateBoardId}> Generate My Board Link </button>
                                </div>      
                            </div>
                        </div>
                }
            </form>
        );
    }
}

export default CreateBoard;
