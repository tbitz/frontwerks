import React, {Component} from 'react';

export class LogRocketC extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    render() {
        return <div>
            <p>Count: {this.state.count}</p>
            <button onClick={() => this.setState({
                count: this.state.count + 1
            })}>Increase</button>
        </div>;
    }
}
