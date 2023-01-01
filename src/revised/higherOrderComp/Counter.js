import React, { Component } from 'react'
import UpdateCounter from './UpdateCounter';

class Counter extends Component {

    render() {
        const {count, increment} = this.props
        return (<div>
            Counter Comp: {count} <br />
            <button onClick={increment}>increment</button>
        </div>)
    }
}

export default UpdateCounter(Counter);