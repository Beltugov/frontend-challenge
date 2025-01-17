import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    catArr: [],
    favoriteList: JSON.parse(localStorage.getItem("FavoriteCats")) || [],
    isLoading: false
}

const catSlice = createSlice({
    name: "cat",
    initialState,
    reducers: {
        loadingCats(state) {
            state.isLoading = true
        },
        loadingCatsSuccessful(state, action) {
            state.catArr = [...state.catArr, ...action.payload]
            state.isLoading = false
        },
        loadingCatsError(state, action) {
            state.isLoading = false
            console.log(action.payload)
        },

        likeCat(state, action) {
            if (state.favoriteList.find((value) => value === action.payload) !== undefined) {
                state.favoriteList = state.favoriteList.filter((value) => value !== action.payload)
            } else {
                state.favoriteList = [...state.favoriteList, action.payload]
            }

            localStorage.setItem("FavoriteCats", JSON.stringify(state.favoriteList))
        }
    }
})

export const {loadingCats, loadingCatsSuccessful, loadingCatsError, likeCat} = catSlice.actions
export default catSlice.reducer