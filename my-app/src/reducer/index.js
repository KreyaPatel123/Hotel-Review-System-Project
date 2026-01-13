import {combineReducers} from "redux";
import authSlice from "../slices/authSlice";
import cardSlice from "../slices/cardSlice";
import profileSlice from "../slices/profileSlice";
import viewCardSlice from "../slices/viewCardSlice"


const rootReducer = combineReducers({
    auth:authSlice,
    card:cardSlice,
    profile:profileSlice,
    viewCard:viewCardSlice,
})

export default rootReducer;
