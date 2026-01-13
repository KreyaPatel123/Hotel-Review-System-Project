// import { useState } from "react"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"
// import  {login}  from "../services/operations/authAPI"


// function Login() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })

//   const [showPassword, setShowPassword] = useState(false)

//   const { email, password } = formData

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleOnSubmit = (e) => {
//     e.preventDefault()
//     dispatch(login(email, password, navigate))
//   }

//   return (
//     <form
//       onSubmit={handleOnSubmit}
//       className="mt-6 flex w-full flex-col gap-y-4"
//     >
//       <label className="w-full">
//         <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//           Email Address <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type="text"
//           name="email"
//           value={email}
//           onChange={handleOnChange}
//           placeholder="Enter email address"
//           style={{
//             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//           }}
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//         />
//       </label>
//       <label className="relative">
//         <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//           Password <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type={showPassword ? "text" : "password"}
//           name="password"
//           value={password}
//           onChange={handleOnChange}
//           placeholder="Enter Password"
//           style={{
//             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//           }}
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
//         />
//         <span
//           onClick={() => setShowPassword((prev) => !prev)}
//           className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//         >
//           {showPassword ? (
//             <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//           ) : (
//             <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//           )}
//         </span>
//         <Link to="/forgot-password">
//           <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
//             Forgot Password
//           </p>
//         </Link>
//       </label>
//       <button
//         type="submit"
//         className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//       >
//         Login
//       </button>
//     </form>
//   )
// }

// export default Login

//AA CODE
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../services/operations/authAPI';
// import { AiFillEye, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// export const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [showPassword,setShowPassword] = useState(false);
//   const [formData,setFormData] = useState({
//     email:"",
//     password:""
//   })

//   const handleOnChange = (e) => {
//     setFormData((prevData)=>({
//       ...prevData,
//       [e.target.name]:e.target.value
//     }))
//   }

//   const handleOnSubmit =  (e) => {
//     e.preventDefault();
//     dispatch(login(email,password,navigate)); 
//   }

//   const {email,password} = formData

//   return (
//     <div className='flex flext-col'>
//         <form onSubmit={handleOnSubmit} 
//       className="mt-6 flex w-full flex-col gap-y-4"
//         >
//             <label htmlFor='email' className='flex flex-col'>
//               <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">Email</p>
//               <input type='text'
//                 value={email}
//                 name='email'
//                 id='email'
//                 placeholder='Enter Email'
//                 onChange={handleOnChange}
//                 style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
//                 className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//               />
//             </label>

//             <label htmlFor='password' className='flex flex-col'>
//               <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">Password</p>
//               <div className='relative'>
//               <input type={setShowPassword ? "text" : "password"}
//                 id='password'
//                 name='password'
//                 value={password}
//                 placeholder='Enter Password'
//                 onChange={handleOnChange}
//                 style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
//                 className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//               />
//               <span onClick={()=>{setShowPassword((prev)=>!prev)}}
//               className="absolute right-3 top-[18px] z-[10] cursor-pointer"
//               >
//                 {
//                   showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
//                 }
//               </span>
//             </div>  
//             </label>

            
//               <button type='submit'
//               className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//               >
//                 Login
//               </button>
//         </form>
//     </div>
//   )
// }

import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../services/operations/authAPI"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-slate-800 text-center">
          Welcome Back
        </h2>
        <p className="text-sm text-slate-500 text-center mt-1">
          Login to your account
        </p>

        <form onSubmit={handleOnSubmit} className="mt-6 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-md border border-slate-300 px-4 py-2.5
              text-slate-800 placeholder:text-slate-400
              focus:border-blue-600 focus:ring-1 focus:ring-blue-600
              outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 pr-10
              text-slate-800 placeholder:text-slate-400
              focus:border-blue-600 focus:ring-1 focus:ring-blue-600
              outline-none transition"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer text-slate-400 hover:text-blue-600"
            >
              {showPassword ? (
                <AiOutlineEye size={20} />
              ) : (
                <AiOutlineEyeInvisible size={20} />
              )}
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white
            hover:bg-blue-700 active:scale-[0.99] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

