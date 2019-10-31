import React, {Component} from 'react';

// stateless functional component
export class StateClass extends Component {

    fruit = {
        name: 'Apple',
        supply: 3
    }

    constructor(props) {
        super(props); // call to base class constructor
        this.state = {
            message: 'Are you hungry?',
            fruit: this.fruit
        }
    }

    eat({hungryGuy}) {
        this.fruit.supply = this.fruit.supply - 1;
        if (this.fruit.supply <= 0) {
            this.setState({
                fruit: this.fruit,
                message: `${hungryGuy} ate all the ${this.fruit.name}s`
            })
        } else {
            this.setState({
                fruit: this.fruit,
                message: `${hungryGuy} eats an ${this.state.fruit.name}. ${this.state.fruit.supply} left`
            })
        }
    }

    render() {
        if (this.fruit.supply > 0) {
            return (
                <div>
                    <h1>StateClass:</h1>
                    <p>{this.state.message} </p>

                    <button onClick={() => this.eat(this.props)}>
                        Yes, eat an {this.state.fruit.name} ({this.state.fruit.supply})
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>StateClass:</h1>
                    <p>State: {this.state.message} </p>
                </div>
            )
        }
    }
}
