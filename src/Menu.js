import React from 'react';
import logo from './Assets/Logo_Xoping.png';
import list from "./Assets/list.png";
import history from "./Assets/history.png";
import config from "./Assets/config.png";
import logout from "./Assets/logout.png";
import './index.css';



const Menu = () => {
    return (
        <ul id='menu'>
            <li><img id='logo' src={logo} alt="Xoping"/></li>
            <li><img src={list} alt=""/>Lista de compra</li>
            <li><img src={history} alt=""/>Histórico</li>
            <li><img src={config} alt=""/>Configurações</li>
            <li><img src={logout} alt=""/>Sair</li>
        </ul>
    );
};

export default Menu