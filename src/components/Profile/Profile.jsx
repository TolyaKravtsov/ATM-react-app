import React from "react";
import profileStylesheet from "./profile.module.css"

const Profile = (props) => {
    return (
        <div className={profileStylesheet.style}>
            <div>
                <img className={profileStylesheet.mainImage} src="https://www.alfabank.by/main/new-glav-16-09.jpg" alt="main"/>
            </div>
        </div>
    )
};

export default Profile