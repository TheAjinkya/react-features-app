import React, { Component } from 'react'
import UpdateCounter from './UpdateCounter';

class KeyPressApp extends Component {

    render() {
        const {count, increment} = this.props
        return (<div>
            Counter Comp: {count} <br />
            <button onDoubleClick={increment}>onDoubleClick</button>
        </div>)
    }
}

export default UpdateCounter(KeyPressApp);