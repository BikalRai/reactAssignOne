import React, { Component } from "react";

export default class ClassCounter extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    //increase count
    addCount = () => {
        this.counter = this.state.count;
        this.setState({ count: (this.counter += 1) });
    };

    //decrease count
    decreaseCount = () => {
        this.counter = this.state.count;
        this.setState({ count: (this.counter -= 1) });
    };
    render() {
        return (
            <>
                <div>{this.state.count}</div>
                <button onClick={this.addCount}>+</button>
                <button onClick={this.decreaseCount}>-</button>
            </>
        );
    }
}
