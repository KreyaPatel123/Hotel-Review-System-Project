// import { toast } from 'react-toastify'
import { toast } from 'react-hot-toast'

import {user} from '../apis'
import { setLoading, setToken } from '../../slices/authSlice'
import { apiconnector } from '../apiconnector'
import { setUser } from '../../slices/profileSlice'

import {contactAPI} from "../apis"
import {card} from "../apis"


const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API 
} = user

const {
  CREATE_CONTACT_API,
  EDITCARD_API
} = contactAPI

const {CREATECARD_API,SHOWALLCARD_API, GETCARDDETAILS_API,CREATE_RATING_API,GETALL_RATING_API} = card

export function sendOtp(email,navigate){
    return async (dispatch) => {
        const toastId = toast.loading("Loading.....");
        dispatch(setLoading(true));
        try{
            const response = await apiconnector("POST",SENDOTP_API,{
                email,
                checkUserPresent:true,
            })
            console.log("SEND API RESPONSE",response);
            console.log(response?.data?.success);

            if(!response?.data?.success){
                throw new Error(response?.data?.message);
            }
            toast.success("OTP Send Successfully");
            navigate("/verify-email");

        }
        catch(error){
            console.log(error);
            toast.error("Could not Send OTP");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
    }
}

export function signup(firstName, lastName, email, otp, password, confirmPassword, accountType, contactNumber, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
        console.log("Reached SIGNUP try block");
      const response = await apiconnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        otp,
        confirmPassword,
        contactNumber,
        accountType,
      });

      console.log("SIGNUP API RESPONSE", response);

      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }

      toast.success("User Sign-up Successfully");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP ERROR:", error);
      toast.error("User does not Sign-up");
      navigate("/signup");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(email,password,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try{
            // await add karvu jaruri che
            const response = await apiconnector("POST",LOGIN_API,{email,password})

            if(!response?.data?.success){
                throw new Error(response?.data?.message);
            }

            toast.success("Login Successfully");
            dispatch(setToken(response.data.token))

            // string proper banavi
            const userImage = response.data?.user?.image
              ? response.data.user.image
              : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

            dispatch(setUser({ ...response.data.user, image: userImage }))

            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))
            
            navigate("/add-card/show-card")
        }
        catch(error){
            console.log(error);
            toast.error("Login Failed");
            navigate("/login")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
}}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    // dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}

export function createCard(navigate,hotelName,discription,countryName,cityName,image,token){
  return async(dispatch) => {
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true))
    let result = null
    try{
      const response = await apiconnector("POST",CREATECARD_API,({
        hotelName,
        discription,
        countryName,
        cityName,
        image
      }),
      {
      "Content-Type": "multipart/form-data",//aa jayare image ke video upload karvani hoi input/form ma tayare aa lakhvu khali text pass karvano hoi to nai lakhvanu
      Authorization: `Bearer ${token}`,
    })
      console.log("CARD RESPONSE",response);
      if(!response?.data?.success){
        throw new Error(response?.data?.message||"Course Creation failed")
      }
      toast.success("Card Created Successfully")
      navigate("show-card")
      result = response?.data?.data
    }
    catch(error){
      console.log(error);
      toast.error("Coulde not Create Card");
    }
    finally{
      toast.dismiss(toastId);
      dispatch(setLoading(false))
    }

    return result;

  }
}

export function editCard (navigate,hotelName,discription,cityName,countryName,image,token){
  return async() => {
    const toastId = toast.loading("Loading...")
  let result = null
  try{
    const response = await apiconnector("POST",EDITCARD_API,({
      hotelName,
      discription,
      cityName,
      countryName,
      image,
    }),
  {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
  })
    console.log("EDIT CARD RESPONSE",response);
    if(!response?.data?.success){
      throw new Error(response?.data?.message || "Card Edition failed")
    }
    result=response?.data?.data  
  }
  catch(error){
    console.log(error);
    toast.error("Card does not Edit")
  }
  finally{
  toast.dismiss(toastId)
  }
  return result;
  }
}

export function showAllCard (token){
  return async(dispatch)=>{
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    let result = []
    try{
      const response = await apiconnector("GET",SHOWALLCARD_API,null,{Authorization: `Bearer ${token}`})
      console.log("RESPONSE",response);
      if(!response?.data?.success){
        throw new Error(response?.data?.message||"Could not fetched Course")
      }
      result = response?.data?.data
    }
    catch(error){
      console.log(error);
    }
    finally{
      toast.dismiss(toastId);
      dispatch(setLoading(false));
    }
   return result;

  }
}

export function getCardDetails(token,cardId){
  return async(dispatch)=>{
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true))
    let result = null;
    try{
      const response = await apiconnector("GET",GETCARDDETAILS_API(cardId),{},{
        Authorization:`Bearer ${token}`
      })
      console.log("RESPONSE",response);
      if(!response?.data?.data){
        throw new Error(response?.data?.message||"Could not fetched Course Details")
      }
      result = response?.data?.data
    }
    catch(error){
      console.log(error);
      toast.error("Coulde not fetched CourseDetails")
    }
    finally{
    toast.dismiss(toastId)
    dispatch(setLoading(false))
    }
    return result;
  }
}

export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...");
  let success = false;
  try {
    const response = await apiconnector("POST", CREATE_RATING_API, data , {
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE RATING API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Create Rating");
    }
    toast.success("Rating Created");
    success = true;
  } catch (error) {
    success = false;
    console.log("CREATE RATING API ERROR............", error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
  toast.dismiss(toastId);
  return success;
};

export function contact(navigate,firstName,lastName,email,contactNumber,cityName,countryName,about){
  return (dispatch)=>{
      const toastId = toast.loading("Loading");
      dispatch(setLoading(true))
    try{
      const responce =  apiconnector("POST",CREATE_CONTACT_API,({firstName,lastName,email,contactNumber,cityName,countryName,about}))
      console.log("CONTACT Response",responce);
      toast.success("Contact Created Successfully");
    }
    catch(error){
      console.log(error);
      toast.error("Contact is not created")
    }
      toast.dismiss(toastId);
      dispatch(setLoading(false));

  }
}

export function getAllRating (token){
  return async(dispatch)=>{
    // const toastId = toast.loading("Loading...")
    let result = [];
  // dispatch(setLoading(true))
  try{
    const response = await apiconnector("GET",GETALL_RATING_API,null,{Authorization: `Bearer ${token}`})
    if(!response?.data?.success){
      throw new Error(response?.data?.message||"CLOUD NOT FETCHED ALL REVIEWS")
    }
    result = response?.data?.data
    // console.log("ALL REVIEW RESULT",result);
    // toast.success("ALL REVIEWS FETCHED SUCCESSFULLY")
  }
  catch(error){
    console.log("DO NOT FETCHED ALL REVIEWS",error);
    toast.error("DO NOT FETCHED ALL REVIEWS")
  }
  // toast.dismiss(toastId)
  // dispatch(setLoading(false))
  return result;
  }
}















// export function signup(firstName,lastName,email,otp,password,confirmPassword,accountType,contactNumber,navigate){

//     return async(dispatch)=>{
//         const toastId = toast.loading("Loading...");
//         dispatch(setLoading(true));
//         try{
//             console.log("Reached SIGNUP try block");
//             const response = await apiconnector("POST",SIGNUP_API,{
//             firstName,
//             lastName,
//             email,
//             password,
//             otp,
//             confirmPassword,
//             contactNumber,
//             accountType})
//         console.log("SIGNIN API RESPONSE",response);
        
//         if(!response?.data?.success){
//             throw new Error(response?.data?.message);
//         }
//         console.log("SIGNUP API PAYLOAD", {
//   firstName,
//   lastName,
//   email,
//   password,
//   otp,
//   confirmPassword,
//   contactNumber,
//   accountType,
// })

//         toast.success("User Sign-in Successfully");

//         navigate("/login")        
//         }
//         catch(error){
//         console.log(error);
//         toast.error("User does not Sign-in");
//         navigate("/signup");
//         }
    
//         dispatch(setLoading(false));
//         toast.dismiss(toastId);
// }
// }






// export function login(email,password,navigate){

//     return async(dispatch)=>{
//         const toastId = toast.loading("Loading...");
//         dispatch(setLoading(true));
//         try{
//             const response = apiconnector("POST",LOGIN_API,{email,password})
//             if(!response?.data?.success){
//                 throw new Error(response?.data?.message);
//             }
//             toast.success("Login Successfully");
//             dispatch(setToken(response.data.token))
//             const userImage = response.data?.user?.image
//             ? response.data.user.image
//             : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
//             dispatch(setUser({ ...response.data.user, image: userImage }))
      
//             localStorage.setItem("token", JSON.stringify(response.data.token))
//             localStorage.setItem("user", JSON.stringify(response.data.user))
//         }
//         catch(error){
//             console.log(error);
//             toast.error("Login Failed");
//             navigate("/login")
//         }
//         dispatch(setLoading(false));
//         toast.dismiss(toastId);

//     }
// }







//AA NICHE NA BEV CODE SACHE CHE AND RUN PN THAI

// export function signup(firstName, lastName, email, otp, password, confirmPassword, accountType, contactNumber, navigate) {
//   return async (dispatch) => {
//     // const toastId = toast.loading("Loading...");
//     dispatch(setLoading(true));
//     try {
//         console.log("Reached SIGNUP try block");
//       const response = await apiconnector("POST", SIGNUP_API, {
//         firstName,
//         lastName,
//         email,
//         password,
//         otp,
//         confirmPassword,
//         contactNumber,
//         accountType,
//       });

//       console.log("SIGNUP API RESPONSE", response);

//       if (!response?.data?.success) {
//         throw new Error(response?.data?.message);
//       }

//       toast.success("User Sign-up Successfully");
//       navigate("/login");
//     } catch (error) {
//       console.log("SIGNUP ERROR:", error);
//       toast.error("User does not Sign-up");
//       navigate("/signup");
//     }

//     dispatch(setLoading(false));
//     toast.dismiss(toastId);
//   };
// }

