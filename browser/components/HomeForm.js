import React from 'react';
import {Link, browserHistory, hashHistory} from 'react-router';
import PickButtons from '../containers/PickButtons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class HomeForm extends React.Component {
    constructor(props){
        super(props);
        this.generateBoardId = this.generateBoardId.bind(this);
        this.handleCreateBoardClick= this.handleCreateBoardClick.bind(this);
        this.handleJoinBoardClick = this.handleJoinBoardClick.bind(this);
    }


    handleCreateBoardClick( ) {
        this.props.showCreateTab(true);
        this.props.hideJoinTab(false);
    }

    handleJoinBoardClick() {
        this.props.showJoinTab(true);
        this.props.hideCreateTab(false);
    }

    generateBoardId(evt){
        evt.preventDefault();
        let boardId = Math.floor(Math.random()*89999+10000);
        let details = {
            path: boardId,
            buttons: this.props.buttons
        }
        this.props.addBoard(details);
    }

    componentDidUpdate(){
        const self = this;
        if(this.props.roomNotFound){
          setTimeout(function() {
          self.props.clearRoomNotFound(false);
           }, 3000)
        }

        console.log("HEY REDIRECTING AND I SHOULDN'T!!!")
        if (this.props.foundBoard) {
            hashHistory.push(`/${this.props.foundBoard}`);
        }
    }

    confirmRoomExists(evt){
        evt.preventDefault();
        let boardId = evt.target.boardId.value.toString()
        this.props.confirmRoom(boardId);
    }

  render () {
      const { showJoin, showCreate, roomNotFound, boardId } = this.props;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1 col-xs-12">
                    <div className="panel panel-border">
                        <div className="panel-heading"> {/* panel heading start*/}
                            
                            <div className="row"> {/* panel headings text start */}
                                <div className="col-xs-6">
                                    <a href="#" onClick={this.handleJoinBoardClick} className={showJoin ? 'active': ''}>Join a Board</a>
                                </div>
                                <div className="col-xs-6">
                                    <a href="#" onClick={this.handleCreateBoardClick} className={showCreate ? 'active' : ''}>Create a Board</a>
                                </div>
                            </div>{/* panel headings text end */}

                            <hr/>
                        </div> {/* panel heading end*/}

                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">

                                    <form onSubmit={(evt) => this.confirmRoomExists(evt)} id="login-form" role="form" style={{display: showJoin ? 'block' : 'none' }}>
                                        <div className="form-group">
                                            <input name="boardId" type="text" tabIndex="1" className="form-control" placeholder="Board #"/>
                                        </div>
                                            {roomNotFound ? <div>Oops! We couldn't find that room</div> : ''}
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
                                                    <button type="submit" tabIndex="4" className="form-control btn btn-login">Join</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <form role="form" style={{display: showCreate ? 'block' : 'none' }}>                 
                                        {this.props && boardId ? 
                                                    <div>
                                                    <h4>{`Here is your board #: ${this.props.boardId}`}</h4>
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <Link to={`/${this.props.boardId}`}><button type="submit" tabIndex="4" className="form-control btn btn-register">GO TO MY BOARD</button></Link>
                                                    </div>
                                                </div>
                                                     :
                                                <div className="form-group">
                                                    <PickButtons/>
                                                    <div className="row">
                                                        <div>
                                                            <button id="register-submit" tabIndex="4" className="form-control btn btn-register" onClick={this.generateBoardId}> Generate My Board Link </button>
                                                        </div>
                                                    </div>
                                                </div> 
                                                } 
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                  
    </div>
    )
  }
}

export default HomeForm;

