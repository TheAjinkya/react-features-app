import React, { useState } from 'react'

const Viewings = () => {

    const [count, setCount] = useState(0);

    const [name, setName] = useState({firstName:'Ajinkya', lastName:'Chanshetty'});

    const changeName = ()=>{
        setName({firstName:'vicky'})
    }


   const increment = ()=>{
        setCount(prevCount =>{
            return prevCount + 1 
        })
    }

    const decrement = ()=>{
        setCount(prevCount =>{
            return prevCount - 1 
        })
    }

    const incrementFive = ()=>{
        for (let i = 0; i < 5; i++) {
            setCount(count + 1)
        }
    }

    return (<div>
        Counter Comp: {count} <br />
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={incrementFive}>incrementFive</button>
    </div>)
}

export default Viewings;