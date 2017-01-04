import React from 'react';
import {Link, browserHistory, hashHistory} from 'react-router';
import PickButtons from '../containers/PickButtons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class HomeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            joinBoardClass: 'active',
            createBoardClass: '',
            showLogin: true,
            showCreate: false,
        }
        this.generateBoardId = this.generateBoardId.bind(this);
        this.handleCreateBoardClick= this.handleCreateBoardClick.bind(this);
        this.handleJoinBoardClick = this.handleJoinBoardClick.bind(this);
    }


    handleCreateBoardClick( ) {
        this.setState({createBoardClass: 'active', joinBoardClass: '', showCreate: true, showLogin: false});
    }

    handleJoinBoardClick() {
        this.setState({createBoardClass: '', joinBoardClass: 'active', showCreate: false, showLogin: true});
    }

    generateBoardId(){
        let boardId = Math.floor(Math.random()*89999+10000);
        let details = {
            path: boardId,
            buttons: this.props.buttons
        }
        this.props.addBoard(details);
    }

    componentDidUpdate(){
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
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-border">
                        <div className="panel-heading"> {/* panel heading start*/}
                            
                            <div className="row"> {/* panel headings text start */}
                                <div className="col-xs-6">
                                    <a href="#" onClick={this.handleJoinBoardClick} className={this.state.joinBoardClass}>Join a Board</a>
                                </div>
                                <div className="col-xs-6">
                                    <a href="#" onClick={this.handleCreateBoardClick} className={this.state.createBoardClass}>Create a Board</a>
                                </div>
                            </div>{/* panel headings text end */}

                            <hr/>
                        </div> {/* panel heading end*/}

                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">

                                    <form  onSubmit={(evt) => this.confirmRoomExists(evt)} id="login-form" role="form" style={{display: this.state.showLogin ? 'block' : 'none' }}>
                                        <div className="form-group">
                                            <input name="boardId" type="text" tabIndex="1" className="form-control" placeholder="Board #"/>
                                        </div>
                                            {this.props.roomNotFound ? <div>Oops! We couldn't find that room</div> : ''}
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <button type="submit" tabIndex="4" className="form-control btn btn-login">Join</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <form role="form" style={{display: this.state.showCreate ? 'block' : 'none' }}>                 
                                        {this.props && this.props.boardId ? 
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
                                                        <div className="col-sm-6 col-sm-offset-3">
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

