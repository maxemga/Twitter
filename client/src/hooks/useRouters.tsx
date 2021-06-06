import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage'
import Test from '../components/HomePage/Test'
import MainPage from '../components/MainPage/MainPage'


export const useRouters = (isAuth: boolean) => {
    if (isAuth) {
        return(
            <Switch>        
                <Route exact path='/'>
                   <MainPage/>
                </Route>
                <Route exact path='/home'>
                   <MainPage/>
                </Route>  
            </Switch> 
        )

    }
    else {
        return(
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
            </Switch>
        )
    }
}