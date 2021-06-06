import React from 'react'

interface RegisterModalComplete {
    setModal: any
    
}

const RegisterModalComplete: React.FC<RegisterModalComplete> = (props) => {
    return(      
        <div className='homePageModal'>
            <div className='homePageModalWrapper'>
                <div className='homePageHeaderModal'>
                    <button className='homePageNextButton' onClick={() => props.setModal('null')}>Закрыть</button>
                    <p>Шаг 5 из 5</p>                          
                </div>
                <div className='homePageModalContent'>
                    <div className='formHeader'>
                        <p>Спасибо за регистрацию!</p>
                    </div>
                    <div className='homePageModalContent'>
                        <div className='homePageModalContentTitle'>
                            <h2>Войти на свою учетную запись вы можете с помощью почты и пароля, который мы вам отправили по почте</h2>
                        </div>
                        {/* <div className='homePageContentFlex'>
                            <p>Твиттер использует эти данные для подбора контента для вашей ленты. Ваши имя, адрес электронной почты и номер телефона никогда не будут храниться вместе с историей посещенных веб-сайтов.</p>   
                        </div>
                        <div className='homePageModalContentFooter'><p>Подробнее об этих настройках можно прочитать в <span>Справочном центре</span></p></div> */}
                    </div>
                </div>
            </div>
        </div>
                
    )
}

export default RegisterModalComplete