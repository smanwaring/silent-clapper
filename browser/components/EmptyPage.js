import React, { Component, PropTypes } from 'react';
import {Link, browserHistory, hashHistory} from 'react-router';

export default class EmptyPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Oops! That page doesn't exist</h1>
                <Link to={'/'}><h1> Go back home</h1></Link>
            </div>
        )
    }
}


module.exports = EmptyPage;