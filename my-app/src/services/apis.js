// const BASE_URL = process.env.REACT_APP_BASE_URL;
// console.log("BASE_URL ===>", BASE_URL)

// export const user = {
//     // SENDOTP_API : BASE_URL + "/user/sendOTP",
//     SENDOTP_API:"http://localhost:4000/api/v1/user/sendOTP",
//     // SIGNUP_API : BASE_URL + "/user/signup",
//     SIGNUP_API:"http://localhost:4000/api/v1/user/signup",

//     // LOGIN_API : BASE_URL + "/user/login",
//     LOGIN_API:"http://localhost:4000/api/v1/user/login",
//     // RESETPASSWORD_API: BASE_URL + "/user/changePassword",
//     RESETPASSWORD_API:"http://localhost:4000/api/v1/user/changePassword"
// }

// export const card = {
//     CREATECARD_API : BASE_URL + "/card/createCard",
//     EDITCARD_API : BASE_URL + "/card/editCard",
//     GETCARDDEATEILS_APT : BASE_URL + "/card/getCardDetails",
//     SHOWALLCARD_API : BASE_URL + "/card/showAllCard",
// }
// src/services/apis.js

// .env file (root level) ma aa add karo:
// REACT_APP_BASE_URL=http://localhost:4000/api/v1

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/api/v1";
console.log("BASE_URL ===>", BASE_URL);

export const user = {
  SENDOTP_API: BASE_URL + "/user/sendOTP",
  SIGNUP_API: BASE_URL + "/user/signup",
  LOGIN_API: BASE_URL + "/user/login",
  RESETPASSWORD_API: BASE_URL + "/user/changePassword",
};

export const card = {
  CREATECARD_API: BASE_URL + "/card/createCard",
  EDITCARD_API: BASE_URL + "/card/editCard",
  GETCARDDETAILS_API: (cardId) => BASE_URL + `/card/getCardDetails/${cardId}`,
  SHOWALLCARD_API: BASE_URL + "/card/showAllCard",

  CREATE_RATING_API : BASE_URL + "/card/createRating",
  GETAVG_RATING_API : BASE_URL + "/card/getAvgRating",
  GETALL_RATING_API : BASE_URL + "/card/getAllRating"
};

export const contactAPI = {
  CREATE_CONTACT_API:BASE_URL+"/contact/createContact"
};
