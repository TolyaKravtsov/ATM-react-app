import React from "react";
import headerStylesheet from "./header.module.css"
import Logo from "./Logo/Logo";
import Registration from "./Registration/Registation";


const Header = (props) => {
    return (
        <div className={headerStylesheet.style}>
            <Logo/>
            <Registration/>
        </div>
    )
};

export default Header