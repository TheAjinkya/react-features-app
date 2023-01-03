import React, { Component } from 'react'

class CounterRender extends Component {

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    decrement = ()=>{
        this.setState(PrevCount=>{
           return {
            count : PrevCount - 1
           } 
        })
    }

    increment = ()=>{
        this.setState(PrevCount=>{
           return {
            count : PrevCount + 1
           } 
        })
    }

    render() {
        return (
        <div>
            {this.props.render(this.state.count, this.increment)}
        </div>
        )
    }
}
export default CounterRender;