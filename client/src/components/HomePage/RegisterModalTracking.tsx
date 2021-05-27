import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import Checkbox from '@material-ui/core/Checkbox';
import {CgClose} from 'react-icons/cg'

interface RegisterModalTracking {
    setModal: any
}

const RegisterModalTracking: React.FC<RegisterModalTracking> = (props) => {
    return(
        <div className='homePageModal'>
            <div className='homePageModalWrapper'>
                <div className='homePageHeaderModal'>
                    <CgClose onClick={() => props.setModal('register')}/>
                    <AiOutlineTwitter/>
                    <button  className='homePageNextButton' onClick={() => props.setModal('registerConfirm')}>Далее</button>
                </div>
                <div className='homePageModalContent'>
                    <div className='formHeader'>
                        <p>Настройте Твиттер, как вам удобно</p>
                    </div>
                    <div className='homePageModalContent'>
                        <div className='homePageModalContentTitle'><h2>Отслеживать, на каких сайтах осуществляется показ материалов Твиттера</h2></div>
                        <div className='homePageContentFlex'>
                            <p>Твиттер использует эти данные для подбора контента для вашей ленты. Ваши имя, адрес электронной почты и номер телефона никогда не будут храниться вместе с историей посещенных веб-сайтов.</p>
                            
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            
                        </div>
                        <div className='homePageModalContentFooter'><p>Подробнее об этих настройках можно прочитать в <span>Справочном центре</span></p></div>
                    </div>
                </div>
            </div>
         </div>
    )
   
}

export default RegisterModalTracking