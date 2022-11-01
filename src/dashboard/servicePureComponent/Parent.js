import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component{

    constructor(){
        super();
        this.state = {
            firstName :'Ajinkya',
            lastName :'Chanshetty'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({firstName:'vicky'})
        }, 10000)
        console.log("comp Parent Did Mount")
    }

    render(){
        console.log("comp Parent render")
        return(<div>Hello Parent! <br/>
         <br/>
        <Child name={this.state.firstName}/>
        </div>)
    }
}

export default Parent;