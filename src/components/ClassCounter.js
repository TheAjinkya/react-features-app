import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      employees: [10, 203, 23, 34534, 5462, 23, 4]
    };
  }

  increment =()=>{
      this.setState({count: this.state.count+1}, ()=>{
        console.log(this.state.count)
    })
  }
  componentDidMount(){
    document.title = `clicked ${this.state.count} times`
  }

  componentDidUpdate(){
    document.title = `clicked ${this.state.count} times`
  }

  render() {
    return (<div>Hello Class Component! : {this.state.count}
        <hr/>
        <button onClick={()=>{this.increment()}}>increment</button>
        <hr/>
        {this.state.employees.map(iterator=>{
            return (<div>{iterator}</div>)
            })}
    </div>);
  }
}

export default ClassCounter;
