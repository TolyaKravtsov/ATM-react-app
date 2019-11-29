import React from "react";
import loginStylesheet from "./login.module.css"
import {Field} from "redux-form";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators/Validators";
import {Input} from "../../utils/FormsControl/FormsControl";

let maxLength20 = maxLengthCreator(20);
let minLength5 = minLengthCreator(5);


const LoginForm = (props) => {
    return (
        <div className={loginStylesheet.center}>
            <form className={loginStylesheet.padding} onSubmit={props.handleSubmit}>
                <h1>Registration Page</h1>

                <div className={loginStylesheet.input}>
                    <Field placeholder="Login" name={"login"} component={Input}
                           validate={[requiredField, maxLength20, minLength5]}/>
                </div>
                <div>
                    <Field placeholder="Password" name={"password"} component={Input}
                           validate={[requiredField, maxLength20, minLength5]}/>

                </div>
                <div>
                    <button>
                        Sign In
                    </button>
                </div>

            </form>
        </div>
    )
};

export default LoginForm