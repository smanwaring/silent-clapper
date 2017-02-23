import React from 'react';
import PickButtons from '../containers/PickButtons';
import { Link } from 'react-router';

class CreateBoard extends React.Component {
  constructor(props) {
    super(props);
    this.generateBoardId = this.generateBoardId.bind(this);
    this.clearGeneratedboard = this.clearGeneratedboard.bind(this);
  }

  componentDidUpdate() {
    const self = this;
    if (this.props.showPickButtonError) {
      setTimeout(function () {
        self.props.pickButtonsError(false);
      }, 2000);
    }
  }

  generateBoardId(evt) {
    evt.preventDefault();
    if (this.props.buttonsPicked.length < 1) {
      this.props.pickButtonsError(true);
    } else {
      let boardId = Math.floor(Math.random() * 89999 + 10000);
      let details = {
        path: boardId,
        buttons: this.props.buttonsPicked
      };
      this.props.addBoard(details);
    }
  }

  clearGeneratedboard(evt) {
    evt.preventDefault();
    this.props.clearGeneratedboard('');
  }
  render() {
    const { generatedBoard, showPickButtonError, buttonsPicked, showCreateTab } = this.props;
    return (
      <form role="form" style={{ display: showCreateTab ? 'block' : 'none' }}>
        {this.props && generatedBoard ?
          <div>
            <h4>Sweet! Here's your board #:</h4><h4 className="textlarge">{generatedBoard}</h4>
            <div className="col-sm-6 col-sm-offset-3">
              <Link to={`/${generatedBoard}`}><button type="submit" tabIndex="4" className="form-control btn btn-create">GO TO MY BOARD</button></Link>
              <h5>OR</h5>
              <button tabIndex="4" onClick={this.clearGeneratedboard} className="form-control btn btn-create-new">GENERATE A NEW BOARD</button>
            </div>
          </div>
          :
          <div className="form-group">
            <PickButtons />
            <div className="row">
              {showPickButtonError && buttonsPicked.length < 1 ? <div>Please select some buttons!</div> : ''}
              <div className="col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
                <button tabIndex="4" className="form-control btn btn-create generate" onClick={this.generateBoardId}> Generate My Board Link </button>
              </div>
            </div>
          </div>
        }
      </form>
    );
  }
}

export default CreateBoard;
