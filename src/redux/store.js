import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import loginReducer from "./reducer/loginReducer";

let AllReducers = combineReducers({
    form: formReducer,
    loginReducer:loginReducer,
});

let store = createStore(AllReducers);

window.store = store;

export default store