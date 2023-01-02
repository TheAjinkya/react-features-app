import React, { Component } from 'react'


const ReducerApp = (OrigionalComponent, count) =>{
    
    class ReducerApp extends Component {
        
        constructor(props){
            super(props);
        }

        decrement = ()=>{
            this.setState(PrevCount=>{
               return {
                count : PrevCount - 1
               } 
            })
        }

        render(){
            return(<OrigionalComponent decrement={this.decrement} />)
        }
    }
    return ReducerApp;
}
export default ReducerApp;
