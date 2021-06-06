import React from 'react'
import MainNavigation from './MainNavigation'
import { Switch, Route } from 'react-router-dom'
import MainPageHome from './MainPageHome'

const MainPage: React.FC = () => {
    return( 
        <div className='mainPage'>
            <div className='mainPageWrapper'>
                <div className='mainPageContent'>
                    <div className='mainPageNav'>
                        <MainNavigation/>
                    </div>
                    <div className='mainPageMain'>
                        <Switch>
                            <Route exact path='/'>
                                <MainPageHome/>
                            </Route>
                            <Route exact path='/home'>
                                
                            </Route>
                        </Switch>
                    </div>
                    <div className='mainPageSerach'>
                        <Switch>
                            <Route exact path='/'>
                                
                            </Route>
                            <Route exact path='/home'>
                               
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage