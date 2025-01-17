import {likeCat, loadingCats, loadingCatsError, loadingCatsSuccessful} from "../slices/CatSlice";

export const fetchCats = () => async (dispatch) => {
    dispatch(loadingCats())
    try {
        console.log("LOAD")
        const cats = await fetch("https://api.thecatapi.com/v1/images/search?limit=20&&api_key=live_jqRNkLofZVmbn4wAqOacRmXvCTLGj8wYKL4D4ZBbVUW1I121bM92Eavzg0qZCnqs").then((data) => data.json())
        dispatch(loadingCatsSuccessful(cats))
    } catch (e) {
        dispatch(loadingCatsError(e))
    }
}

export const likeCatAction = (elem) => (dispatch) => {
    dispatch(likeCat(elem))
}