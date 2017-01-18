
import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class JoinBoardForm extends Component {
    constructor(props){
        super(props);
        this.confirmRoomExists = this.confirmRoomExists.bind(this);
    }

    componentDidUpdate(){
        const self = this;
        if (this.props.roomNotFound){
          setTimeout(function() {
          self.props.clearRoomNotFound(false);
           }, 2000);
        }
        if (this.props.foundBoard) {
            hashHistory.push(`/${this.props.foundBoard}`);
        }
    }
   
    confirmRoomExists(evt){
        evt.preventDefault();
        let boardId = evt.target.boardId.value.toString();
        this.props.confirmRoom(boardId);
    }

    render() {
        const { showJoin, roomNotFound } = this.props;
        return (
            <div>
                <form onSubmit={(evt) => this.confirmRoomExists(evt)} role="form" style={{display: showJoin ? 'block' : 'none' }}>
                    <div className="form-group">
                        <input name="boardId" type="text" tabIndex="1" className="form-control" placeholder="Board #"/>
                    </div>
                        {roomNotFound ? <div>Oops! We couldn't find that room</div> : ''}
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
                                <button type="submit" tabIndex="4" className="form-control btn btn-join">Join</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default JoinBoardForm;



