import React, {createRef, useEffect, useRef} from 'react';

import {useDispatch} from "react-redux";
import CatCard from "../CatCard/CatCard";

import "./CatList.scss"
import {fetchCats} from "../../store/actions/CatAction";
import {useLocation} from "react-router";

const CatList = ({arr, isLoading, likedList}) => {
    const lastItem = createRef()
    const dispatch = useDispatch()
    const location = useLocation().pathname;
    const observerLoader = useRef(null);

    useEffect(() => {
        if (location === "/frontend-challenge") {
            if (observerLoader.current) {
                observerLoader.current.disconnect();
            }
            observerLoader.current = new IntersectionObserver((entries) => entries[0].isIntersecting && dispatch(fetchCats()));

            if (lastItem.current) {
                observerLoader.current.observe(lastItem.current);
            }
        }
    }, [lastItem]);

    return (
        <>
            <div className="cat-list">
                {arr && arr.length > 0 ? arr.map((elem, index, array) =>
                    <CatCard url={elem.url || elem} ref={(index === array.length - 1) ? lastItem : null}
                             isLiked={likedList.find((value) => value === (elem.url || elem)) !== undefined}/>
                ) : "Пока котиков нет"}
            </div>
            {isLoading && <div className="loading">"... загружаем еще котиков ..."</div>}
        </>
    );
};

export default CatList;