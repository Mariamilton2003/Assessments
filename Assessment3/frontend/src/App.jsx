import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LoginAndSignupPage } from './Pages/LoginAndSignupPage'
import { HomePage } from './Pages/HomePage'

export const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' Component={HomePage}/>
                <Route path='/login' Component={LoginAndSignupPage } />
                <Route path='/register' Component={LoginAndSignupPage } />
            </Routes>
        </BrowserRouter>
    )
}
