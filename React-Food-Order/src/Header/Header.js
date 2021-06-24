import React from "react";

import {IoCart} from "react-icons/io5"
import {IconContext} from "react-icons";
import "./Header.css";

const Header = () => {
    return (
        <div id={"header"}>
            <h1 id={"logo"}>ReactMeals</h1>
            <div id={"card"}>
                <IconContext.Provider value={{size: "1.5rem"}}>
                    <IoCart/>
                </IconContext.Provider>
                <span id={"card-text"}>Your Cart</span>
                <div id={"items-count"}>0</div>
            </div>
        </div>
    );
}

export default Header;