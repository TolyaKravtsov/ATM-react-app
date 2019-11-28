import React from "react";
import logoStylesheet from "./logo.module.css"
import {NavLink} from "react-router-dom";
import registrationStylesheet from "../Registration/registration.module.css";


const Logo = (props) => {
    return (
        <div>
            <NavLink to="/profile" className={registrationStylesheet.decoration}> <img
                className={logoStylesheet.logoImage}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Alfa-Bank.svg/1280px-Alfa-Bank.svg.png"
                alt="logo"/>
            </NavLink>

        </div>
    )
};

export default Logo