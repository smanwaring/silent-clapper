import React from 'react';
import {Link, browserHistory, hashHistory} from 'react-router';


class HomeFormTest extends React.Component {
	constructor(props){
		super(props);
	}
  render () {
    return (
      <div className="container">

      
        <div className="row">
          <div className="testHeading col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
            <h1 className="test-centerHeadingText">Heading</h1>
          </div>
        </div>
      
      <div className="row">
        <div className="testSocial col-lg-1 col-lg-offset-1 col-md-1 col-md-offset-1 col-sm-1 col-sm-offset-1">
          <div className="testSocialIcons">
            <p>Heart</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>


       <div className="row">
        <div className="testForm col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
          <h1>Content inside</h1>
        </div>
       </div>

       <div className="row">
        <div className="testFooter col-lg-12 col-lg-offset-0">
          <h1>Footer</h1>
        </div>
      </div>

    </div> 
    )
  }
}

export default HomeFormTest;
