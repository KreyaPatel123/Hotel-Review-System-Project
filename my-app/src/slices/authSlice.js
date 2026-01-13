import { createSlice } from "@reduxjs/toolkit";

// get token from local storage 
let token = null;
try{
    const storeToken = localStorage.getItem("token");
    console.log("Row token from localStorage",storeToken);
    token = storeToken ? JSON.parse(storeToken) : null ; 
    console.log("Token added from localStorage",token);
}
catch(error){
    console.log("Error Passing the token from localStorage",error);
    token = null;
}

const initialState = {
    token: token,
    signupData: null,
    loading: false,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken : (state,action) => {
            console.log("SET TOKEN CALLED",action.payload);
            state.token = action.payload;
            localStorage.setItem("token",JSON.stringify(action.payload));
        },

        setSignupData: (state, action) => {
            console.log("🟡 SET SIGNUP DATA", action.payload);
            state.signupData = action.payload;
        },
        setLoading: (state, action) => {
            console.log("🔵 SET LOADING", action.payload);
            state.loading = action.payload;
        },
    }
});
export const { setToken, setSignupData, setLoading } = authSlice.actions;
export default authSlice.reducer;
