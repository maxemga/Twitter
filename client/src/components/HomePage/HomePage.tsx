import React, { useState } from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import ModalManager from './ModalManager'

const HomePage: React.FC = () => {
    const [modal, setModal] = useState<string>('null')

    
    return(
            <div className='homePageBlock'>
            <div className='homePageWrapper'>
                <div className='homePageContent'>
                    <div className='homePageLogo'>
                        <AiOutlineTwitter/>
                        
                    </div>
                    <ModalManager modal={modal} setModal={setModal}></ModalManager>
                    <div className='homePageTitle'>
                        <div className='homePageTitleContent'>
                            <AiOutlineTwitter/>
                            <h1>В курсе происходящего</h1>
                            <p>Присоединяйтесь к Твиттеру прямо сейчас!</p>
                            <div className='homePageLinks'>
                                <div className='homePageButton' onClick={() => setModal('register')}><a href='/#'>Зарегестрироваться</a></div>
                                <div className='homePageButton'><a href='/#'>Войти</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomePage