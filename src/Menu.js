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
            <li id='logo'><img  src={logo} alt="Xoping"/></li>
            <li className='menuItem' id='firstItem'><img src={list} alt=""/>Lista de compra</li>
            <li className='menuItem'><img src={history} alt=""/>Histórico</li>
            <li className='menuItem'><img src={config} alt=""/>Configurações</li>
            <li className='lastMenuItem'><img src={logout} alt=""/>Sair</li>
            <li id='info'>ℹ️</li>
        </ul>
    );
};

export default Menu