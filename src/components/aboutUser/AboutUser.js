import React from "react";
import {reduxForm} from "redux-form";
import AboutUser from "./AboutUserReduxForm";


const AboutUserInfo = (props) => {
    const SaveInfo = (formData) => {
        props.addInfo(formData);
    };
    return (
        <ReduxAboutUserForm onSubmit={SaveInfo}/>
    )


};
const ReduxAboutUserForm = reduxForm({form: 'aboutUser'})(AboutUser);

export default AboutUserInfo