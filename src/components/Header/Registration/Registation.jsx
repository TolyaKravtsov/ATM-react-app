import React from "react";
import registrationStylesheet from "./registration.module.css"
import {NavLink} from "react-router-dom";


const Registration = (props) => {
    return (
        <div className={registrationStylesheet.login}>
            <NavLink to="/login" className={registrationStylesheet.decoration}> Sign in/Sign up</NavLink>
        </div>
    )
};

export default Registration