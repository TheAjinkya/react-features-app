import React, { Component } from 'react'
import ReducerApp from './ReducerApp';
import UpdateCounter from './UpdateCounter';

class Counter extends Component {

    render() {
        const {count, increment, decrement} = this.props
        return (<div>
            Counter Comp: {count} <br />
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>)
    }
}

export default UpdateCounter(Counter);