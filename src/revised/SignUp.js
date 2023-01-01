import React, { Component } from 'react'

class SignUp extends Component {

    constructor(props) {
        super();
        this.state ={
            username:'ajinkya',
            password:'password',
            address:'Earlham Grove',
            city:'London'
        }
    }

    changeHandler = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        }, ()=>{
            console.log(this.state)
        })
    }

    render() {
        return (<div>
            <form>
                <div>
                    <label>username</label>
                    <input type="text" name='username' value={this.state.username} onChange={(e)=>this.changeHandler(e)}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="text" name='password' value={this.state.password} onChange={(e)=>this.changeHandler(e)}/>
                </div>
                <div>
                    <label>address</label>
                    <input type="textarea" name='address' value={this.state.address} onChange={(e)=>this.changeHandler(e)}/>
                </div>
                <div>
                    <label>City</label>
                    <select value={this.state.city}>
                        <option value="react">React</option>
                        <option value="angular">angular</option>
                        <option value="vue">Vue</option>
                    </select>
                    <input type="text" name='city' value={this.state.city} onChange={(e)=>this.changeHandler(e)}/>
                </div>
            </form>
        </div>)
    }
}

export default SignUp;