import React, { Component } from 'react'

class Services extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (<div>
            Hello Services <br />
            <hr/>
            {this.state.firstName} {this.state.lastName} <br />
            <button onClick={this.callMeBack.bind(this)}>Call me</button>
            <button onClick={this.changeName.bind(this)}>Change Name</button>
        </div>)
    }
}

export default Services;