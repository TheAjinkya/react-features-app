import React, { useEffect, useState } from 'react'

function LoginForm() {

    const inputRef = React.createRef()
    const [email, setEmail] = useState("ajinkya");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        console.log(inputRef.current.value)
    })

    const onChangeEmailHandler = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const onChangePasswordHandler = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const onSubmitHandler = (e) => {
        console.log("e.target.value")
        e.preventDefault()
    }

    return (<div>Login Form
        <br />
        <form onSubmit={(e) => { onSubmitHandler(e)}}>
        <input type="text" ref={inputRef} value={email} onChange={(e) => { onChangeEmailHandler(e) }} />
        <input type="text" value={password} onChange={(e) => { onChangePasswordHandler(e) }} />
        <button type='Submit'>Submit</button>
        </form>
    </div>)
}

export default LoginForm;