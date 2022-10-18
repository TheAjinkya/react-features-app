import { useEffect } from "react";

function CustomUseState(count){

    useEffect(()=>{
        document.title = `Document ${count}`
    },[count])
}

export default CustomUseState;