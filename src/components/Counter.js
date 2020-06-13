import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    countNum = () => {
        /* this.setState({
            count : this.state.count + 1,
        },() => {
            console.log('call back value',this.state.count)
        });
        console.log(this.state.count); */
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count);

    }

    countNum5 = () => {
        this.countNum();
        this.countNum();
        this.countNum();
        this.countNum();
        this.countNum();
    }

    render() {
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <button onClick={this.countNum5}>Incremnet</button>
            </div>
        )
    }
}

export default Counter;