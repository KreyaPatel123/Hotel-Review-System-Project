import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step:1,
    card:null,
    editCard:false,
}

const cardSlice = createSlice({
    name:"card",
    initialState,
    reducers:{
        setStep : (state,action) => {
            state.step = action.payload
        },
        setCard : (state,action) => {
            state.card = action.payload
        },
        setEditCard : (state,action) => {
            state.editCard = action.payload
        },
        resetCardState: (state) => {
            state.step = 1
            state.card = null
            state.editCard = false
        },
    }
})

export const {
  setStep,
  setCard,
  setEditCard,
  resetCardState,
} = cardSlice.actions

export default cardSlice.reducer

// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   step: 1,
//   card: [],        // 👈 null ni jagyae array
//   editCard: false,
// }

// const cardSlice = createSlice({
//   name: "card",
//   initialState,
//   reducers: {
//     setStep: (state, action) => {
//       state.step = action.payload
//     },
//     setCard: (state, action) => {
//       state.card = [...state.card, action.payload]   // 👈 nava card add
//     },
//     setEditCard: (state, action) => {
//       state.editCard = action.payload
//     },
//     resetCardState: (state) => {
//       state.step = 1
//       state.card = []
//       state.editCard = false
//     },
//   },
// })

// export const { setStep, setCard, setEditCard, resetCardState } =
//   cardSlice.actions

// export default cardSlice.reducer
