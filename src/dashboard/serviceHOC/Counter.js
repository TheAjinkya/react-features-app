import React, { useState } from 'react'
import IncrementCounterComp from './IncrementCounterComp'
import ServiceMouseHover from './ServiceMouseHover'

const Counter = (props)=>{
    return (<div>Hello Counter<br/>
    <button onClick={()=>{props.incrementTheCount()}}>Increment {props.count}</button> <br/>
    <ServiceMouseHover/>
    </div>)
}
export default IncrementCounterComp(Counter)