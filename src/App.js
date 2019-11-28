import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => (
    <BrowserRouter>
        <div className="App">
            <div>
                <Header/>
            </div>
            <div>
                <Route path="/Profile" component={Profile}/>
                <Route path="/Login" component={LoginContainer}/>

            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </BrowserRouter>

);

export default App;
