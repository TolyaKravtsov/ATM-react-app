import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import UserInfo from "./components/aboutUser/AboutUserReduxForm";
import AboutUserContainer from "./components/aboutUser/AboutUserContainer";

const App = () => (
    <BrowserRouter>
        <div className="App">
            <div>
                <Header/>
            </div>
            <div>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={LoginContainer}/>
                <Route path="/aboutuser" component={AboutUserContainer}/>

            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </BrowserRouter>

);

export default App;
