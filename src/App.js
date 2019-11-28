import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
            </div>
            <div>
                <Profile/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
