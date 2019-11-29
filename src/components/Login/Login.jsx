import React from "react";
import LoginForm from "./ReduxLoginForm";
import {reduxForm} from "redux-form";


const Login = (props) => {
    const SaveInfo = (formData) => {
        props.addInfo(formData);
    };
    return (
        <ReduxLoginForm onSubmit={SaveInfo}/>
    )


};
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

export default Login