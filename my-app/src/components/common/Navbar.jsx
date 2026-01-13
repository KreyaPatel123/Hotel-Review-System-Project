// import React, { useState } from 'react'
// import { useSelector } from "react-redux"
// import {matchPath, NavLink, useLocation} from "react-router-dom"
// import { NavbarLinks } from '../../data/NavbarLinks'
// import { ProfileDropMenu } from '../core/auth/ProfileDropMenu'

// export const Navbar = () => {
//     const {token} = useSelector((state)=>state.auth);
//     const {user} = useSelector((state)=>state.profile);
//     const location = useLocation();

//     //je link pr click kariye te link highlight karva niche no function use thai che
//     const matchRoute = (route) => {
//         return matchPath({path:route},location.pathname);
//     }


//   return (
//     <div className='w-full h-14 items-center flex justify-around bg-yellow-300'>
//     {
//         NavbarLinks.map((link,index)=>(
//             <NavLink to={link.path} key={index}>
//                 <p className={`${matchRoute(link.path)?"text-white":"text-black"} font-bold`}>{link.title}</p>
//             </NavLink>    
//         ))
//     }

//     {
//         token !== null ? (<ProfileDropMenu/>) : (<div>
//               <NavLink to="/login">
//         <button className="rounded-[8px] border border-richblack-900 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//             Login
//         </button>
//     </NavLink>

//     <NavLink to="/signup">
//         <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//             Sign Up
//         </button>
//     </NavLink>
//         </div>)
//     }
//     </div>
//   )
// }

//AA CODE
// import React, { useState } from 'react'
// import { useSelector } from "react-redux"
// import {matchPath, NavLink, useLocation, useNavigate} from "react-router-dom"
// import { NavbarLinks } from '../../data/NavbarLinks'
// import { ProfileDropMenu } from '../core/auth/ProfileDropMenu'
// import { ACCOUNT_TYPE } from '../../utils/constants'

// export const Navbar = () => {
//     const {token} = useSelector((state)=>state.auth);
//     const {user} = useSelector((state)=>state.profile);
//     const location = useLocation();
//     const navigate = useNavigate();

//     //je link pr click kariye te link highlight karva niche no function use thai che
//     const matchRoute = (route) => {
//         return matchPath({path:route},location.pathname);
//     }


//   return (
//     <div className='w-full h-14 items-center flex justify-around bg-gray-400'>
//     {
//         NavbarLinks.map((link,index)=>(
//             <NavLink to={link.path} key={index}>
//                 <p className={`${matchRoute(link.path)?"text-white":"text-black"} font-bold`}>{link.title}</p>
//             </NavLink>    
//         ))
//     }
//     {/* //add for student */}

//     {
//         user?.accountType === ACCOUNT_TYPE.VISITOR && <p className='text-black font-bold' onClick={()=>navigate("/add-card/show-card")}>Card</p>
//     }

//     {/* // add for owner  */}
//     {
//         user?.accountType === ACCOUNT_TYPE.OWNER && (
//             <button className="rounded-[8px] border border-white bg-black text-yellow-300 px-[12px] py-[8px] text-richblack-100"
//             onClick={()=>navigate("/add-card")}>
//                 Add Card
//             </button>)
//     }

//     {
//         token !== null ? (<ProfileDropMenu/>) : (<div>
//               <NavLink to="/login">
//         <button className="rounded-[8px] border border-richblack-900 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//             Login
//         </button>
//     </NavLink>

//     <NavLink to="/signup">
//         <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//             Sign Up
//         </button>
//     </NavLink>
//         </div>)
//     }

//     </div>
//   )
// }


import React from "react"
import { useSelector } from "react-redux"
import { matchPath, NavLink, useLocation, useNavigate } from "react-router-dom"
import { NavbarLinks } from "../../data/NavbarLinks"
import { ProfileDropMenu } from "../core/auth/ProfileDropMenu"
import { ACCOUNT_TYPE } from "../../utils/constants"

export const Navbar = () => {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)

  const location = useLocation()
  const navigate = useNavigate()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo / Brand */}
        <div
          className="text-xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          HotelFeedback
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NavbarLinks.map((link, index) => (
            <NavLink to={link.path} key={index}>
              <span
                className={`text-sm font-medium transition ${
                  matchRoute(link.path)
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.title}
              </span>
            </NavLink>
          ))}

          {/* Visitor */}
          {user?.accountType === ACCOUNT_TYPE.VISITOR && (
            <button
              onClick={() => navigate("/add-card/show-card")}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
            >
              Card
            </button>
          )}

          {/* Owner */}
          {user?.accountType === ACCOUNT_TYPE.OWNER && (
            <button
              onClick={() => navigate("/add-card")}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Add Card
            </button>
          )}
        </nav>

        {/* Auth Buttons / Profile */}
        <div className="flex items-center gap-3">
          {token ? (
            <ProfileDropMenu />
          ) : (
            <>
              <NavLink to="/login">
                <button className="rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition">
                  Login
                </button>
              </NavLink>

              <NavLink to="/signup">
                <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
