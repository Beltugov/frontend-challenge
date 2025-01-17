import React from 'react';
import "./Header.scss"
import {Link, useLocation} from "react-router";

const Header = () => {
    const location = useLocation().pathname;

    return (
        <header className="header">
            <Link className={"link-btn " + (location === "/" && "selected")} to={"/"}>Все котики</Link>
            <Link className={"link-btn " + (location === "/favorite" && "selected")} to={"/favorite"}>Любимые котики</Link>
        </header>
    );
};

export default Header;