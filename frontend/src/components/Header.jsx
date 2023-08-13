import React from 'react';
import '../css/components/header.css';
import logo from '../img/logo.svg';
import iconeCarrinho from '../img/icons/carrinho.svg';
import iconeBusca from '../img/icons/buscar.svg';
import '../css/global/global.css';

const Header = () => {
    return (
        <header className="header-bg">
            <nav className="header container">
                <a href="/"><img src={logo} alt="Logo" /></a>
                <div className="busca">
                    <input type="text" placeholder="Buscar produto" className="campo-busca" />
                    <button className="btn-buscar">
                        <img src={iconeBusca} alt="Ícone de Busca" />
                        Buscar
                    </button>
                </div>
                <img src={iconeCarrinho} className="icone-carrinho" />
            </nav>
        </header>
    );
}

export default Header;
