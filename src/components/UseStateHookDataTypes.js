import React, { useEffect, useState } from 'react'

function UseStateHookDataTypes() {

    const [count, setCount] = useState(0);

    const [fullName, setfullName] = useState({ firstName: 'Ajinkya', lastName: 'Chanshetty' });

    const [employee, setEmployee] = useState([10, 20, 30]);

    const updateEmployee = (emp) => {
        console.log(emp);
        setEmployee([...employee, emp]);
    }

    const resetCount = () => {
        setCount(prevCount => {
            return prevCount + 1
        },)
    }
    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const chnageName = () => {
        setfullName({
            firstName: "vicky",
            lastName: "Shetty"
        });
    }

    const calledFun = ()=>{
        console.log("Called Function")
    }

    useEffect(()=>{
     console.log("called")
     window.addEventListener("scroll", calledFun);
     return ()=>{
        window.removeEventListener("scroll",calledFun);
    }   
    },[])

    return (
        <div>
            Count : {count} <br />
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setCount(count - 1) }}>Decrement</button>
            <button onClick={() => { incrementByFive() }}>Increment by 5</button>
            <button onClick={() => { resetCount() }}>Reset</button>

            <hr />
            State as an Object
            <hr />

            fullName: {fullName.firstName + " " + fullName.lastName} <br />
            firstName : <input type="text" value={fullName.firstName}
                onChange={e => setfullName({ ...fullName, firstName: e.target.value })} />
            <br />
            Last Name : <input type="text" value={fullName.lastName}
                onChange={e => setfullName({ ...fullName, lastName: e.target.value })} />
            <br />
            <button onClick={() => { chnageName() }}>Change Name</button>
            <hr />
            State as an Array
            <hr />
            <input type="text" onChange={(e)=>{updateEmployee(e.target.value)}}></input>
            <ul>{employee.map(iterator => {
                return (<li>{iterator}</li>)
            })}</ul>

        </div>)
}

export default UseStateHookDataTypes;