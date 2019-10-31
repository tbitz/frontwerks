import React, {Component} from 'react';

// stateful functional component
// maintain private data = state
// complex UI - stateful, smart, container
export class ClassComponent extends Component {
    render() {
        return (
        <div>
            <h1>Hello, {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>
        )
    }
}
