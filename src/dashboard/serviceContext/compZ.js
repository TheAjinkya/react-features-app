import React, { useContext } from 'react'
import {UserContext} from '../../App'


function CompZ(){

    const user = useContext(UserContext);
      
    return(<div>
                    <div>Hello {user.firstName + user.lastName}</div>
        Comp Z! <br/>
        </div>)
}
export default CompZ;