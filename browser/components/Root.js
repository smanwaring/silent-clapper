import React from 'react';

export default class Root {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
