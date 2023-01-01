import React, { Component } from 'react'

class MouseHoverApp extends Component {

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
            <button onMouseOver={this.increment}>MouseHover</button>
        </div>)
    }
}

export default MouseHoverApp;