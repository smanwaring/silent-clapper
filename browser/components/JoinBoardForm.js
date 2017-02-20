import React from 'react';
import { hashHistory } from 'react-router';

class JoinBoardForm extends React.Component {
  constructor(props){
    super(props);
    this.confirmBoardExists = this.confirmBoardExists.bind(this);
  }

  componentDidUpdate(){
    const self = this;
    if (this.props.boardNotFound){
      setTimeout(function() {
        self.props.clearBoardNotFound(false);
      }, 2000);
    }
    if (this.props.currentBoard) {
      hashHistory.push(`/${this.props.currentBoard}`);
    }
  }

  confirmBoardExists(evt){
    evt.preventDefault();
    let boardId = evt.target.boardId.value.toString();
    this.props.confirmBoard(boardId);
  }

  render() {
    const { showJoinTab, boardNotFound } = this.props;
    return (
      <div>
        <form onSubmit={(evt) => this.confirmBoardExists(evt)} role="form" style={{display: showJoinTab ? 'block' : 'none' }}>
              <div className="form-group">
                  <input name="boardId" type="text" tabIndex="1" className="form-control" placeholder="Board #"/>
              </div>
                  {boardNotFound ? <div>Oops! We couldn't find that board</div> : ''}
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



