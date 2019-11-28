import React from "react";
import loginStylesheet from "./login.module.css"
import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <div className={loginStylesheet.center}>
            <form className={loginStylesheet.padding} onSubmit={props.handleSubmit}>
                <h1>Registration Page</h1>

                <div className={loginStylesheet.input}>
                    <Field placeholder="Login" name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder="Password" name={"password"} component={"input"}/>

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