// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     cardEntireData:[]
// }

// const viewCardSlice = createSlice({
//     name:"viewCard",
//     initialState,
//     reducers:{
//         setEntireCardData : (state,action) => {
//             state.cardEntireData = action.payload
//         }
//     }
// })
// export const {
//     setEntireCardData
// }=viewCardSlice.reducer
// viewCardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardEntireData: null,
  loading: false,
};

const viewCardSlice = createSlice({
  name: "viewCard",
  initialState,
  reducers: {
    setCardEntireData: (state, action) => {
      state.cardEntireData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCardEntireData, setLoading } = viewCardSlice.actions;
export default viewCardSlice.reducer;
