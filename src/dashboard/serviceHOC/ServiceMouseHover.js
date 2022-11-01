import React, { useState } from 'react'
import IncrementCounterComp from './IncrementCounterComp'

const ServiceMouseHover = (props) => {

    return (<div onMouseOver={() => { props.incrementTheCount() }}>Service MouseOver Counter {props.count}<br />
    </div>)
}
export default IncrementCounterComp(ServiceMouseHover)