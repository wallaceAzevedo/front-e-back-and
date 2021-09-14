import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jogos from './pages/Categorias';
import home from './pages/Home';
import login from './pages/login';
import register from './pages/register';
import forum from './pages/forum';
import publication from './pages/publications';
import profile from './pages/profile';

function route (){
    return (
        <BrowserRouter>
            <Route path="/" exact component = {home}/>
            <Route path="/categoria" component = {jogos}/>
            <Route path="/login" component = {login}/>
            <Route path="/register" component = {register}/>
            <Route path="/forum" component = {forum}/>
            <Route path="/publication" component = {publication}/>
            <Route path="/profile" component = {profile}/>
        </BrowserRouter>
    )
}

export default route;