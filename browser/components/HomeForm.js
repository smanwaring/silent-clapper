import React from 'react';
import JoinBoardForm from '../containers/JoinBoardForm';
import CreateBoard from '../containers/CreateBoard';


class HomeForm extends React.Component {
    constructor(props){
        super(props);
        this.handleCreateBoardClick = this.handleCreateBoardClick.bind(this);
        this.handleJoinBoardClick = this.handleJoinBoardClick.bind(this);
    }

    handleCreateBoardClick( ) {
        this.props.showCreateTab(true);
        this.props.showJoinTab(false);
    }

    handleJoinBoardClick() {
        this.props.showJoinTab(true);
        this.props.showCreateTab(false);
    }


  render () {
      const { showJoin, showCreate } = this.props;

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
                                    <JoinBoardForm/>
                                    <CreateBoard/>
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

