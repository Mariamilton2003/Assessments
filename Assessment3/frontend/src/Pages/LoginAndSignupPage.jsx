import { useLocation } from 'react-router-dom'
import { Login } from '../Components/Login'
import { SignUp } from '../Components/SignUp'
import { Navbar } from '../Components/Navbar'
export const LoginAndSignupPage = () => {
  const { pathname } = useLocation()
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="w-full"><Navbar /></div>
        <div className="w-full h-full flex justify-center items-center relative">
          {pathname === "/login" ? <Login /> : <SignUp />}
        </div>
      </div>
    </>
  )
}
