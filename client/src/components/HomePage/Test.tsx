import React, { useContext } from 'react'
import { ContextAuth } from '../../context/ContextAuth'


const Test: React.FC = () => {
    const auth: any = useContext(ContextAuth)
    const logoutUser = () => {
        auth.logout()
    }
    
    return(
          <button onClick={() => logoutUser()}>ffffff</button>
    )

}

export default Test