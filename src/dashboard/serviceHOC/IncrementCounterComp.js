import React, { Component, useState } from 'react'

const IncrementCounterComp = (OriginalComponent) => {

    const NewComponent = () => {
        const [count, setCount] = useState(0)
        const increment = () => {
            setCount(prevCount => prevCount + 1)
        }
        return <OriginalComponent count={count} incrementTheCount={increment} />
    }
    return NewComponent
}
export default IncrementCounterComp