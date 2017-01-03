import React from 'react';
import {Link, browserHistory, hashHistory} from 'react-router';
import $ from 'jquery'; 


class HomeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            joinBoardClass: 'active',
            createBoardClass: ''
        }
        this.generateBoardId = this.generateBoardId.bind(this);
        this.handleCreateBoardClick= this.handleCreateBoardClick.bind(this);
        this.handleJoinBoardClick = this.handleJoinBoardClick.bind(this);
    }

    componentWillMount(){
        // $(function() {
        //     $('#login-form-link').click(function(e) {
        //         $("#login-form").delay(100).fadeIn(100);
        //         $("#register-form").fadeOut(100);
        //         $('#register-form-link').removeClass('active');
        //         $(this).addClass('active');
        //         e.preventDefault();
        //     });
        //     $('#register-form-link').click(function(e) {
        //         $("#register-form").delay(100).fadeIn(100);
        //         $("#login-form").fadeOut(100);
        //         $('#login-form-link').removeClass('active');
        //         $(this).addClass('active');
        //         e.preventDefault();
        //     });
        // });  
    }

    handleCreateBoardClick( ) {
        this.setState({createBoardClass: 'active'});
        this.setState({joinBoardClass: ''});
    }

    handleJoinBoardClick() {
        this.setState({joinBoardClass: 'active'});
        this.setState({createBoardClass: ''});
    }

    generateBoardId(){
        //generate random 5 digit number
        let boardId = Math.floor(Math.random()*89999+10000);
        //dispatch boardID via action
        this.props.setBoardId(boardId);
    }

    handleSubmitJoinBoard(evt){
        evt.preventDefault();
        let board = evt.target.boardId.value.toString()
        this.props.setCurrentBoard(board);
        hashHistory.push('/' + evt.target.boardId.value);
    }

  render () {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <div className="panel panel-login">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-6">
                                <a href="#" onClick={this.handleJoinBoardClick} className={this.state.joinBoardClass} id="login-form-link">Join a Board</a>
                            </div>
                            <div className="col-xs-6">
                                <a href="#" onClick={this.handleCreateBoardClick} className={this.state.createBoardClass} id="register-form-link">Create a Board</a>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-12">

                                <form  onSubmit={(evt) => this.handleSubmitJoinBoard(evt)} id="login-form" role="form" style={{display: "block"}}>
                                    <div className="form-group">
                                        <input name="boardId" id="boardId" type="text" tabIndex="1" className="form-control" placeholder="Board #"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6 col-sm-offset-3">
                                                <button type="submit" tabIndex="4" className="form-control btn btn-login">Join</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <form id="register-form" role="form" style={{display: "none"}}>
                             
                                   {this.props && this.props.boardId ? 
                                    <div>
                                        <h4>{`Here is your board #: ${this.props.boardId}`}</h4>
                                        <div className="col-sm-6 col-sm-offset-3">
                                            <Link to={`/${this.props.boardId}`}><button type="submit" tabIndex="4" className="form-control btn btn-register">GO TO MY BOARD</button></Link>
                                        </div>
                                    </div>
                                    :
                                    <div className="form-group">
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
