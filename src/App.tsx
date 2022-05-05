import React from 'react';
import './App.css';
import {NavLink, Route, Routes, Outlet, useParams, useNavigate} from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate()
    return(
        <div>
            profile
            <button onClick={() => {navigate('/login')}}>logout</button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile/'}>profile</NavLink>---
            <NavLink to={'/profile/settings'}>settings</NavLink>
            <Routes>
                <Route path={"/*"} element={<div>404</div>}/>
                <Route path={"/"} element={<div>main</div>}/>
                <Route path={"/login"} element={<div>login</div>}/>
                <Route path={"/profile/*"} element={<Profile/>}/>
                <Route path={"/profile/settings"} element={<div>settings</div>}/>
            </Routes>
        </div>
    );
}

export default App;
