import React, { useState } from 'react'
import RegisterConfirmModal from './RegisterConfirmModal'
import RegisterModal from './RegisterModal'
import RegisterModalTracking from './RegisterModalTracking'
import RegisterModalActivate from './RegisterModalActivate'
import RegisterModalComplete from './RegisterModalComplete'
import LoginModal from './LoginModal'

interface ModalManager {
    modal: string
    setModal: any
}

const ModalManager: React.FC<ModalManager> = (props) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const changeValues = (values: any): void => {
        setName(values.name)
        setEmail(values.email)
    }

    return(
        <>
            {(() => {
                switch(props.modal) {
                    case 'null': return null
                    case 'register': return <RegisterModal setModal={props.setModal} changeValues={changeValues} name={name} email={email}/>
                    case 'registerTracking': return <RegisterModalTracking setModal={props.setModal}/>
                    case 'registerConfirm': return <RegisterConfirmModal setModal={props.setModal} name={name} email={email}/>
                    case 'registerValidate': return <RegisterModalActivate setModal={props.setModal} email={email}/>
                    case 'registerComplete': return <RegisterModalComplete setModal={props.setModal}/>
                    case 'login': return <LoginModal setModal={props.setModal}/>
                }
            })()}    
            {props.modal !== 'null' ? <div className='homePageOverlay' onClick={() => props.setModal('null')}></div> : null}
        </>
    )
}

export default ModalManager