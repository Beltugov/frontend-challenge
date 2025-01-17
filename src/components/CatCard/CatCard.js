import React, { useState} from 'react';
import img from "../../assets/img.png";
import LikeBtn from "../LikeBtn/LikeBtn";
import {useDispatch} from "react-redux";
import "./CatCard.scss"
import {likeCatAction} from "../../store/actions/CatAction";

const CatCard = ({url, ref, isLiked}) => {
    const dispatch = useDispatch()
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="cat-list__cat" onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)} ref={ref}>
            <div className="cat-list__cat-img">
                <img src={url} alt={"котик"} width={225} height={225}/>
            </div>
            {isHover &&
                <div className="cat-list__like-btn" >
                    <LikeBtn isLiked={isLiked} onClick={() => dispatch(likeCatAction(url))}/>
                </div>
            }
        </div>
    );
};

export default CatCard;