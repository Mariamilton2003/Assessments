import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <div className="flex p-4 justify-between items-center bg-gray-900">
        <div className="w-[40%] text-3xl font-extrabold text-gray-300">LOGO</div>
        <div className="flex gap-10">
          <div className="text-xl text-gray-400 hover:text-white">Home</div>
          <div className="text-xl text-gray-400 hover:text-white">About</div>
          <div className="text-xl text-gray-400 hover:text-white">Contact Us</div>
        </div>
        <div className="flex gap-4">
          <NavLink to="/login" className="px-5 py-2 rounded-lg text-xl text-white font-extrabold bg-blue-700 hover:bg-blue-400 hover:text-gray-700">Login</NavLink>
          <NavLink to="/register" className="px-5 py-2 rounded-lg text-xl text-white font-extrabold bg-blue-700 hover:bg-blue-400 hover:text-gray-700">Sign Up</NavLink>
        </div>
      </div>
    </>
  )
}
