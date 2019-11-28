import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {saveInfo} from "../../redux/reducer/loginReducer";


let mapStateToProps = (state) => {
    return {
        login: state.login,
        password: state.password,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addInfo: (formData) => {
            dispatch(saveInfo(formData));
            debugger;
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);          //get dialogs