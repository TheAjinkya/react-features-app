import React, { Component } from 'react'

class Dashboard extends Component {

    constructor(props) {
        super();
        this.state = {
            firstName: 'Ajinkya',
            lastName: 'Chanshetty'
        }
    }

    changeName = () => {
        this.setState(prevState=>({
            firstName : prevState.firstName + "aaa",
            lastName : prevState.lastName + "aaa",
        }), ()=>{
            console.log(this.state)
        })
    }

    callMeBack(){
        console.log("Hello Call me Back!", this.state.firstName)
    }

    render() {
        // const {abc, xyz} = this.props
        return (<div>
            Hello Dashboard <br />
            {/* {this.props.children} <br/> */}
            <hr/>
            {/* Props: {abc} <br/> */}
            {this.state.firstName} {this.state.lastName} <br />
            <button onClick={this.callMeBack.bind(this)}>Call me</button>
            <button onClick={this.changeName.bind(this)}>Change Name</button>
        </div>)
    }
}

export default Dashboard;