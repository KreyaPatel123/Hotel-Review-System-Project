//AA CODE
// import React, { useEffect, useState } from "react"
// import Tab from "../components/common/Tab"
// import { ACCOUNT_TYPE } from "../utils/constants"
// import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { setSignupData } from "../slices/authSlice"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { toast } from "react-toastify"
// import { sendOtp } from "../services/operations/authAPI"

// export const SignupForm = () => {

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     contactNumber:""
//   })

//   const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   const { firstName, lastName, email, password, confirmPassword,contactNumber } = formData

//   // handle input changes
//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//     const handleOnSubmit = (e) => {
//     e.preventDefault()

//     if (password !== confirmPassword) {
//       toast.error("Passwords Do Not Match")
//       return
//     }
//     const signupData = {
//       ...formData,
//       accountType,
//     }

//     // Setting signup data to state
//     // To be used after otp verification
//     dispatch(setSignupData(signupData))
//     // Send OTP to user for verification
//     dispatch(sendOtp(formData.email, navigate))

//     // Reset
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       contactNumber:""
//     })
//     setAccountType(ACCOUNT_TYPE.VISITOR);
//   }

//   const tabData = [
//     { id: 1, tabName: "Visitor", type: ACCOUNT_TYPE.VISITOR },
//     { id: 2, tabName: "Owner", type: ACCOUNT_TYPE.OWNER},
//   ]

//   return (
//     <div>
//       <Tab tabData={tabData} field={accountType} setField={setAccountType} />

//       <form onSubmit={handleOnSubmit} className="w-full flex flex-col">
//         {/* First & Last Name */}
//         <div className="flex gap-x-4">
//           <label htmlFor="firstName" className="w-full">
//             <p>
//               First Name <sup className="text-pink-500">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={firstName}
//               onChange={handleOnChange}
//               placeholder="Enter First Name"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//             />
//           </label>
          

//           <label htmlFor="lastName" className="w-full">
//             <p>Last Name</p>
//             <input
//               required
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={lastName}
//               onChange={handleOnChange}
//               placeholder="Enter Last Name"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//             />
//           </label>
//         </div>

//         {/* contactNumber  */}
//         <label htmlFor="contactNumber">
//           <p>Contact Number</p>
//           <input
//             type="text"
//             value={contactNumber}
//             name="contactNumber"
//             onChange={handleOnChange}
//             id="contactNumber"
//             placeholder="Enter Contact Number"
//             style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
//             className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"

//           />
//         </label>

//         {/* Email */}
//         <label htmlFor="email" className="mt-4">
//           <p>Email</p>
//           <input
//             required
//             type="text"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleOnChange}
//             placeholder="Enter Your Email"
//             className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//             style={{
//               boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//             }}
//           />
//         </label>

//         {/* Password + Confirm Password */}
//         <div className="flex gap-x-4 mt-4">
//           {/* Password */}
//           <label className="relative w-full">
//             <p>Create Password</p>
//             <input
//               required
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={password}
//               placeholder="Enter Password"
//               onChange={handleOnChange}
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
//             />
//             <span
//               onClick={() => setShowPassword((prev) => !prev)}
//               className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//             >
//               {showPassword ? (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//           </label>

//           {/* Confirm Password */}
//           <label className="relative w-full">
//             <p>Confirm Password</p>
//             <input
//               required
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={confirmPassword}
//               placeholder="Enter Confirm Password"
//               onChange={handleOnChange}
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
//             />
//             <span
//               onClick={() => setShowConfirmPassword((prev) => !prev)}
//               className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//             >
//               {showConfirmPassword ? (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//           </label>
//         </div>

//           {/* Submit Button */}
//           <button
//           type="submit"
//           className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//         >
//           Create Account
//           </button>
//       </form>
//     </div>
//   )
// }

// export default SignupForm

import React, { useState } from "react"
import Tab from "../components/common/Tab"
import { ACCOUNT_TYPE } from "../utils/constants"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setSignupData } from "../slices/authSlice"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from "react-toastify"
import { sendOtp } from "../services/operations/authAPI"

const SignupForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
  })

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.VISITOR)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword, contactNumber } =
    formData

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    dispatch(setSignupData({ ...formData, accountType }))
    dispatch(sendOtp(email, navigate))
  }

  const tabData = [
    { id: 1, tabName: "Visitor", type: ACCOUNT_TYPE.VISITOR },
    { id: 2, tabName: "Owner", type: ACCOUNT_TYPE.OWNER },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-8">
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />

        <form onSubmit={handleOnSubmit} className="mt-6 space-y-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="Enter First Name"
                required
                className="w-full rounded-md border border-slate-300 px-4 py-2.5
                text-slate-800 placeholder:text-slate-400
                focus:border-blue-600 focus:ring-1 focus:ring-blue-600
                outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="Enter Last Name"
                required
                className="w-full rounded-md border border-slate-300 px-4 py-2.5
                text-slate-800 placeholder:text-slate-400
                focus:border-blue-600 focus:ring-1 focus:ring-blue-600
                outline-none transition"
              />
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              value={contactNumber}
              onChange={handleOnChange}
              placeholder="Enter Contact Number"
              className="w-full rounded-md border border-slate-300 px-4 py-2.5
              text-slate-800 placeholder:text-slate-400
              focus:border-blue-600 focus:ring-1 focus:ring-blue-600
              outline-none transition"
            />
          </div>

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
              placeholder="Enter Your Email"
              required
              className="w-full rounded-md border border-slate-300 px-4 py-2.5
              text-slate-800 placeholder:text-slate-400
              focus:border-blue-600 focus:ring-1 focus:ring-blue-600
              outline-none transition"
            />
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Create Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                required
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 pr-10
                text-slate-800 placeholder:text-slate-400
                focus:border-blue-600 focus:ring-1 focus:ring-blue-600
                outline-none transition"
              />
              <span
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-9 cursor-pointer text-slate-400 hover:text-blue-600"
              >
                {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
              </span>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                required
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 pr-10
                text-slate-800 placeholder:text-slate-400
                focus:border-blue-600 focus:ring-1 focus:ring-blue-600
                outline-none transition"
              />
              <span
                onClick={() => setShowConfirmPassword((p) => !p)}
                className="absolute right-3 top-9 cursor-pointer text-slate-400 hover:text-blue-600"
              >
                {showConfirmPassword ? (
                  <AiOutlineEye size={20} />
                ) : (
                  <AiOutlineEyeInvisible size={20} />
                )}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white
            hover:bg-blue-700 active:scale-[0.99] transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignupForm






















// import React, { useState } from 'react'
// import Tab from '../../common/Tab'
// import {ACCOUNT_TYPE} from "../../../utils/constants"
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import { setSignupData } from '../../../slices/authSlice';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { toast } from 'react-toastify';

// export const signupForm = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [formData,setFormData] = useState({
//         firstName:"",
//         lastName:"",
//         email:"",
//         password:"",
//         confirmPassword:""
//     })
//     const [accountType,setAccountType]=useState(ACCOUNT_TYPE.STUDENT);
//     const [showPassword,setShowPassword]=useState(false);
//     const [showConfirmPassword,setShowConfirmPassword]=useState(false);

//     const {firstName,lastName,email,password,confirmPassword}=formData;

//     const handleOnChange = (e)=>{
//         setFormData((prevData)=>({
//             ...prevData,[e.target.name]:e.target.value
//         }))
//     }

//     const handleOnSubmit = (e) => {
//         e.preventDefault();

//         if(password !== confirmPassword){
//           toast.error("Password and confirmPassword does not matches")
//         }

//         const signupData = {
//             ...formData,accountType
//         }
//         dispatch(setSignupData(signupData));

//         //reset 
//         setFormData({
//             firstName:"",
//             lastName:"",
//             email:"",
//             password:"",
//             confirmPassword:""
//         })
//         setAccountType(ACCOUNT_TYPE.STUDENT)
//     }

//       const tabData = [
//     {
//       id: 1,
//       tabName: "Student",
//       type: ACCOUNT_TYPE.STUDENT,
//     },
//     {
//       id: 2,
//       tabName: "Instructor",
//       type: ACCOUNT_TYPE.INSTRUCTOR,
//     },
//   ]
//   return (
//   <div>
//   <Tab tabData={tabData} field={accountType} setField={setAccountType}/>
//   <form onSubmit={handleOnSubmit} className='w-full flex flex-col'>
//     <div className='flex gap-x-4'>
//       <label htmlFor='firstName'>
//         <p>FirstName <sup className='text-pink-500'>*</sup></p>
//         <input required 
//           type='text'
//           id="firstName"
//           name="firstName"
//           value={firstName}
//           onChange={handleOnChange}
//           placeholder='Enter FirstName'
//           style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//         />
//       </label>

//       <label htmlFor=''>
//         <p>lastName</p>
//         <input required
//         type='text'
//         id='lastName'
//         name='lastName'
//         value={lastName}
//         onChange={handleOnChange}
//         placeholder='Enter Lastname'
//         style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
//         className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
//         />
//         <input/>
//       </label>

//       <label htmlFor='email'>
//         <p>email</p>
//         <input
//           required
//           type='text'
//           id='email'
//           name='email'
//           value={email}
//           placeholder='Enter Your Email'
//           className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
//           style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
//         />
//       </label>

//       <div className="flex gap-x-4">
//         <label className='flex gap-x-3'>
//           <p>Create Password</p>
//           <input required
//           type={showPassword ? "text" : "password"}
//           name='password'
//           value={password}
//           placeholder='Enter Password'
//           onChange={handleOnChange}
//           style={{
//             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//           }}
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
//           />
//           {/* handle icon */}
//           <span onClick={() => setShowConfirmPassword((prev) => !prev)}

//           // onClick={()=>setShowPassword((prev) => !prev)}
//           className="absolute right-3 top-[38px] z-[10] cursor-pointer">
//             {
//               showPassword ? <AiOutlineEye fontSize={24} fill='#AFB2BF'/>  : <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>
//             }
//           </span>
//         </label>

//         <label htmlFor='confirmPassword'>
//           <p>confirmPassword</p>
//           <input required
//           type={showConfirmPassword ? "text" :"password"}
//           name='confirmPassword'
//           value={confirmPassword}
//           placeholder='Enter ConfirmPPassword'
//           onChange={handleOnChange}
//           style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
//           />

//           <span onClick={()=>setShowConfirmPassword((prev) != prev)}
//           className='absolute right-3 top-[38px] z-[10] cursor-pointer'>
//             {
//               showConfirmPassword 
//               ? <AiOutlineEye fontSize={24} fill='#AFB2BF'/>
//               : <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>
//             }
//           </span>
//         </label>

//       </div>
//     </div>
//     <button
//           type="submit"
//           className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//     >
//       Create Account
//     </button>
//   </form>
//   </div>
//   )
// }
