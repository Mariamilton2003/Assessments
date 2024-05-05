import axios from 'axios'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        const {data}= await axios.post("http://127.0.0.1:5000/login",{"email":email,"password":password})
        console.log(data);
        return data ? navigate("/") :""
    }
    return (
        <>
            <div className="flex relative w-full h-full justify-center items-center">
                <span className="w-12 h-12 bg-rose-700 absolute left-[30%] top-[11rem]"></span>
                <span className="w-24 h-24 bg-teal-950 absolute left-[55%] top-[18rem]"></span>
                <span className="w-14 h-14 rounded-2xl bg-violet-800 absolute left-[30%] top-[25rem]"></span>
                <span className="w-12 h-12 bg-rose-700 absolute left-[65%] top-[25rem]"></span>
                <span className="w-24 h-24 bg-teal-950 absolute left-[40%] top-[15rem]"></span>
                <span className="w-14 h-14 rounded-2xl bg-violet-800 absolute left-[65%] top-[12rem]"></span>
                <form action=""
                    className='w-[40%] p-3 pb-7 bg-gray-400 rounded-xl bg-opacity-20 backdrop-filter backdrop-blur-2xl border border-gray-400/35'
                    onSubmit={(e)=>handleLogin(e)}>
                    <div className="text-[2rem] font-bold text-rose-500 text-center">LOGIN</div>
                    <div className="flex flex-col w-full gap-20 mt-12 mx-12">
                        <div className="flex relative">
                            <div className="flex relative gap-3 w-full">
                                <input type="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                className='absolute z-10 px-3 py-2 w-[80%] appearance-none rounded-md text-gray-800 text-lg font-extrabold bg-gray-400/40 outline-none peer border-gray-400 focus:border-[2px]' />
                                <div className={`absolute rounded-md font-extrabold duration-300 transform peer-focus:px-2 peer-focus:py-0 peer-focus:z-20 peer-focus:text-[1rem] peer-focus:bg-gray-400 peer-focus:-translate-y-5 peer-focus:text-white ${email ? "-translate-y-5 text-[1rem] px-2 py-0 text-white bg-gray-400":"text-gray-400 text-2xl px-3 py-1"} `}>Email</div>
                            </div>
                        </div>
                        <div className="flex relative">
                            <div className="flex relative gap-3 w-full">
                                <input type="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                                className='absolute z-10 px-3 py-2 w-[80%] rounded-md text-gray-800 text-lg font-extrabold bg-gray-400/40 outline-none peer border-gray-400 focus:border-[2px]' />
                                <div className={`absolute rounded-md font-extrabold duration-300 transform peer-focus:px-2 peer-focus:py-0 peer-focus:z-20 peer-focus:text-[1rem] peer-focus:bg-gray-400 peer-focus:-translate-y-5 peer-focus:text-white ${password ? "-translate-y-5 text-[1rem] px-2 py-0 text-white bg-gray-400":"text-gray-400 text-2xl px-3 py-1"} `}>Password</div>
                            </div>
                        </div>
                    </div> 
                    <div className="flex justify-between px-2 mx-12 mt-20">
                        <span className="text-sm text-gray-400 -px-2">if you doesn't have an account <NavLink to='/register' className='text-blue-500'>create one</NavLink></span>
                        <span className="text-sm text-blue-500">forgot password</span>
                    </div>
                    <button type="submit"
                    className='w-[80%] mt-5 mx-12 py-2 text-2xl rounded-lg font-extrabold text-gray-300 bg-blue-500'>Login</button>
                </form>
            </div>
        </>
    )
}
