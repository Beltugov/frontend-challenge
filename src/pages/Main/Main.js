import React, {useEffect} from 'react';
import CatList from "../../components/CatList/CatList";
import {useDispatch, useSelector} from "react-redux";
import {fetchCats} from "../../store/actions/CatAction";

const Main = () => {
    const catStore = useSelector((state) => state.catReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCats())
    }, [])

    return (
        <CatList arr={catStore.catArr} isLoading={catStore.isLoading} likedList={catStore.favoriteList}/>
    );
};

export default Main;