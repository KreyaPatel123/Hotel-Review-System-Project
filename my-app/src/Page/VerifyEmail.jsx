// import React from 'react'

// export const VerifyEmail = () => {
//   return (
//     <div className='text-black'>VerifyEmail</div>
//   )
// }

//AA CODE
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import OTPInput from 'react-otp-input'
// import { Link, useNavigate } from 'react-router-dom';
// import { signup,sendOtp } from '../services/operations/authAPI';

// export const VerifyEmail = () => {
//     //authSlice ma aapde already loading and signupData na data che je aathi aapde authSlice mathi aapde sihnUp no data laisu
//    //state.auth mathi loading and signupData bev lai/fetch kari daisu.
//     const {loading,signupData} = useSelector((state)=>state.auth);
//     const [otp,setOtp] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     console.log("Signup Data:", signupData)
// console.log("OTP:", otp)


//     //aai aevu pn thai sake che ke signUpData na data na pn padya hoi aathi me useEffect no use
//     //kari ne first render ma tene process kari daisu..aagar aapdi pase signUpData nai hoi to
//     // farithi aapde tene "/signup" page pr pachu navigate karavi daisu
//     useEffect(()=>{
//         if(!signupData){
//             navigate("/signup");
//         }
//     },[])

// //     const handleOnSubmit = (e) =>{
// //         e.preventDefault();
// //         //authSlice ma aapse already signUp na data che je aathi aapde authSlice mathi aapde sihnUp no data laisu..
// //         //backend ma signUp controller ma aapde je pn data request ki body mathi fetch kariye che
// //         //te data ne aek variable ma store kari ne te variable pass karo/kato tame direct te request ni body na variable
// //         //ne as arguement pass kari sakiye che...

// //         const{
// //             accountType,
// //             firstName,
// //             lastName,
// //             email,
// //             password,
// //             confirmPassword,
// //             contactNumber,
// //             otp,
// //             navigate
// //         } = signupData
// //         // dispatch(signup(accountType,firstName,lastName,email,password,confirmPassword,otp,contactNumber,navigate))
// //         // navigate("/")
// //         dispatch(
// //   signup(
// //     firstName,
// //     lastName,
// //     email,
// //     otp,
// //     password,
// //     confirmPassword,
// //     accountType,
// //     contactNumber,
// //     navigate
// //   )
// // )

// //     }
// const handleOnSubmit = (e) =>{
//     e.preventDefault();

//     const{
//         accountType,
//         firstName,
//         lastName,
//         email,
//         password,
//         confirmPassword,
//         contactNumber,
//     } = signupData

//     // OTP state ma thi levano
//     dispatch(
//       signup(
//         firstName,
//         lastName,
//         email,
//         otp,   // state ma thi aapel otp
//         password,
//         confirmPassword,
//         accountType,
//         contactNumber,
//         navigate
//       )
//     )
// }

//   return (
//     <div className='text-white flex items-center justify-center mt-[150px]'>
//        {
//         loading ? (<div>Loading...</div>) 
//                 : (<div>
//                     <h1>verify Email</h1>
//                     <p>A verification code has been sent to you. Enter the code below</p>
//                     <form onSubmit={handleOnSubmit}>
//                     {/* niche ni syntax OTP ne input levani che */}
//                         <OTPInput
//                            value={otp}
//                            onChange={setOtp}
//                            numInputs={6}
//                            renderSeparator={<span></span>}
//                            renderInput={(props)=><input {...props} className='bg-richblack-800'
//                         //    placeholder='-'
//                            />}
                         
//                            />

//                         <button type='submit'>
//                             Verify Email
//                         </button>   
                          
//                     </form>

//                     <div>
//                        <div>
//                         <Link to="/login">Back to login</Link>
//                        </div>
// {/* aapde jayare Resend it button pr  click karisu tayare pn aapde aek action(otp resend) dispatch karavisu 
// aai aapde suthAPI ma je sendOtp function che tene farithi dispatch/ call karavi daisu/\..
// otp signupData ni ander je email che tema OTP send karisu */}
//                        <button onClick={()=>dispatch(sendOtp(signupData.email,navigate))}>
//                            Resend it
//                        </button>
//                     </div>
//                 </div>)
//        }
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OTPInput from 'react-otp-input'
import { Link, useNavigate } from 'react-router-dom';
import { signup,sendOtp } from '../services/operations/authAPI';

export const VerifyEmail = () => {
    //authSlice ma aapde already loading and signupData na data che je aathi aapde authSlice mathi aapde sihnUp no data laisu
   //state.auth mathi loading and signupData bev lai/fetch kari daisu.
    const {loading,signupData} = useSelector((state)=>state.auth);
    const [otp,setOtp] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("Signup Data:", signupData)
console.log("OTP:", otp)


    //aai aevu pn thai sake che ke signUpData na data na pn padya hoi aathi me useEffect no use
    //kari ne first render ma tene process kari daisu..aagar aapdi pase signUpData nai hoi to
    // farithi aapde tene "/signup" page pr pachu navigate karavi daisu
    useEffect(()=>{
        if(!signupData){
            navigate("/signup");
        }
    },[])

//     const handleOnSubmit = (e) =>{
//         e.preventDefault();
//         //authSlice ma aapse already signUp na data che je aathi aapde authSlice mathi aapde sihnUp no data laisu..
//         //backend ma signUp controller ma aapde je pn data request ki body mathi fetch kariye che
//         //te data ne aek variable ma store kari ne te variable pass karo/kato tame direct te request ni body na variable
//         //ne as arguement pass kari sakiye che...

//         const{
//             accountType,
//             firstName,
//             lastName,
//             email,
//             password,
//             confirmPassword,
//             contactNumber,
//             otp,
//             navigate
//         } = signupData
//         // dispatch(signup(accountType,firstName,lastName,email,password,confirmPassword,otp,contactNumber,navigate))
//         // navigate("/")
//         dispatch(
//   signup(
//     firstName,
//     lastName,
//     email,
//     otp,
//     password,
//     confirmPassword,
//     accountType,
//     contactNumber,
//     navigate
//   )
// )

//     }
const handleOnSubmit = (e) =>{
    e.preventDefault();

    const{
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        contactNumber,
    } = signupData

    // OTP state ma thi levano
    dispatch(
      signup(
        firstName,
        lastName,
        email,
        otp,   // state ma thi aapel otp
        password,
        confirmPassword,
        accountType,
        contactNumber,
        navigate
      )
    )
}
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
            {loading ? (
                <div className="text-blue-900 text-xl font-medium">Loading...</div>
            ) : (
                <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10 w-full max-w-md flex flex-col gap-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-blue-900 text-center">
                        Verify Email
                    </h1>
                    <p className="text-blue-700 text-center">
                        A verification code has been sent to you. Enter the code below.
                    </p>

                    <form onSubmit={handleOnSubmit} className="flex flex-col gap-6">
                        <div className="flex justify-center">
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span className="mx-2"></span>}
                                renderInput={(props) => (
                                    <input
                                        {...props}
                                        className="w-12 h-12 text-center rounded-md border border-blue-300 text-blue-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    />
                                )}
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-300"
                        >
                            Verify Email
                        </button>
                    </form>

                    <div className="flex flex-col items-center gap-4 mt-4">
                        <Link
                            to="/login"
                            className="text-blue-700 hover:text-blue-900 transition duration-300"
                        >
                            Back to Login
                        </Link>

                        <button
                            onClick={() => dispatch(sendOtp(signupData.email, navigate))}
                            className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
                        >
                            Resend OTP
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

































