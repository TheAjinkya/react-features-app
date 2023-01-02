import React, { Component } from 'react'
import UpdateCounter from './UpdateCounter';

class MouseHoverApp extends Component {

    render() {
        const {count, increment} = this.props
        return (<div>
            Counter Comp: {count} <br />
            <button onMouseOver={increment}>MouseHover</button>
        </div>)
    }
}

export default UpdateCounter(MouseHoverApp);