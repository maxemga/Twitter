import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter, AiOutlineNumber } from 'react-icons/ai'
import { HiOutlineHome, HiOutlineMail } from 'react-icons/hi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoBookmarkSharp } from 'react-icons/io5'
import { BsCardList, BsPerson } from 'react-icons/bs'
import { ContextAuth } from '../../context/ContextAuth'


const MainNavigation: React.FC = () => {
    const auth: any = useContext(ContextAuth)

    const logoutUser = () => {
        auth.logout()
    }

    return(
        <nav>
            <Link to=''>
                <div className='mainPageNavIcon'><AiOutlineTwitter/></div>
                <div className='mainPageNavRef'></div>
            </Link>
            <Link to='/home'>        
                <div className='mainPageNavIcon'><HiOutlineHome/></div>
                <div className='mainPageNavRef'>Главная</div>    
            </Link>
            <Link to=''>
                <div className='mainPageNavIcon'><AiOutlineNumber/></div>
                <div className='mainPageNavRef'>Поиск</div>
            </Link>
            <Link to=''>
                <div className='mainPageNavIcon'><IoIosNotificationsOutline/></div>
                <div className='mainPageNavRef'>Уведомления</div>
            </Link>
            <Link to=''>
                <div className='mainPageNavIcon'><HiOutlineMail/></div>
                <div className='mainPageNavRef'>Сообщения</div>
            </Link>
            <Link to=''>
                <div className='mainPageNavIcon'><IoBookmarkSharp/></div>
                <div className='mainPageNavRef'>Закладки</div>
            </Link>
            <Link to=''>
                <div className='mainPageNavIcon'><BsCardList/></div>
                <div className='mainPageNavRef'>Списки</div>
            </Link>
            <Link to=''>
                <div className='mainPageNavIcon'><BsPerson/></div>
                <div className='mainPageNavRef'>Профиль</div>
            </Link>
            <Link to=''>
                <div className='mainPageNavIcon'><AiOutlineTwitter/></div>
                <div className='mainPageNavRef'>Еще</div>
            </Link>
            <button onClick={() => logoutUser()}>
                Твитнуть
            </button>
        </nav>
    )
}

export default MainNavigation