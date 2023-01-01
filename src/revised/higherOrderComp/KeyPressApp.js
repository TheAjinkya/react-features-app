import React, { Component } from 'react'

class KeyPressApp extends Component {

    constructor(props) {
        super();
        this.state = {
            count :0 
        }
    }
    increment = ()=>{
        this.setState(prevState=>(
        {
            count : prevState.count + 1
        }
        ))
    }

    render() {
        return (<div>
            Counter Comp: {this.state.count} <br />
            <button onDoubleClick={this.increment}>onDoubleClick</button>
        </div>)
    }
}

export default KeyPressApp;