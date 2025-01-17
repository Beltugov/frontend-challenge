import React from 'react';
import "./Header.scss"
import {Link, useLocation} from "react-router";

const Header = () => {
    const location = useLocation().pathname;

    return (
        <header className="header">
            <Link className={"link-btn " + (location === "/frontend-challenge" && "selected")} to={"/frontend-challenge"}>Все котики</Link>
            <Link className={"link-btn " + (location === "frontend-challenge/favorite" && "selected")} to={"frontend-challenge/favorite"}>Любимые котики</Link>
        </header>
    );
};

export default Header;