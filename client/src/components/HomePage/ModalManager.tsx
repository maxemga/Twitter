import React from 'react'
import RegisterModal from './RegisterModal'

interface ModalManager {
    modal: string
    setModal: any
}

const ModalManager: React.FC<ModalManager> = (props) => {

    return(
        <>
            {(() => {
                switch(props.modal) {
                    case 'null': return null
                    case 'default': return <RegisterModal/>
                    case 'modal': return <p>66</p>
                }
            })()}    
            {props.modal !== 'null' ? <div className='homePageOverlay' onClick={() => props.setModal('null')}></div> : null}
        </>
    )
}

export default ModalManager