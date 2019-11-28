const LOGIN_PASSWORD = ' LOGIN_PASSWORD';

let initialState = {
    login: null,
    password: null,
};
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_PASSWORD:
            debugger;
            return {
                ...state,
                login: action.formData.login,
                password: action.formData.password
            };
        default:
            return state;

    }
};

//      AC- actionCreator
export const saveInfo = (formData) => ({type: LOGIN_PASSWORD, formData});
export default loginReducer;