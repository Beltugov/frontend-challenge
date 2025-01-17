import React from 'react';
import CatList from "../../components/CatList/CatList";
import {useSelector} from "react-redux";

const Favorite = () => {
    const catStore = useSelector((state) => state.catReducer)

    return (
        <CatList arr={catStore.favoriteList} likedList={catStore.favoriteList}/>
    );
};

export default Favorite;