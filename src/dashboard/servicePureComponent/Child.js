import React, { Component } from 'react'

class Child extends React.PureComponent{

    constructor(props){
        super();
    }

    componentDidMount(){
        console.log("comp Child Did Mount")
    }
    shouldComponentUpdate(){
        return true;
    }

    render(){
        console.log("comp Child render")
        return(<div>Hello Child! <br/>
        {/* name: {this.props.name} */}
        </div>)
    }
}

export default React.memo(Child);