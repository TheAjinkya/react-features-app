import React, { Component } from 'react'


const UpdateCounter = OrgionalComp =>{

    class NewComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                count :0 
            }
        }
        increment = ()=>{
            this.setState(prevState=>{
            return {
                count : prevState.count + 1
            }
        })
        }
    
        render() {
            return (<OrgionalComp count={this.state.count} increment={this.increment}/>)
        }
    }
    return NewComponent
}

export default UpdateCounter;