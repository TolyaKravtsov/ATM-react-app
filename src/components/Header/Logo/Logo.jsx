import React from "react";
import logoStylesheet from "./logo.module.css"


const Logo = (props) => {
    return (
        <div >
            <img className={logoStylesheet.logoImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Alfa-Bank.svg/1280px-Alfa-Bank.svg.png" alt="logo"/>
        </div>
    )
};

export default Logo