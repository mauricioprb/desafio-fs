import React, { useState } from 'react';
import '../css/global/global.css';
import '../css/components/header.css';
import logo from '../img/logo.svg';
import iconeCarrinho from '../img/icons/carrinho.svg';
import iconeBusca from '../img/icons/buscar.svg';
import useQuantidadeCarrinho from '../hooks/useQuantidadeCarrinho';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const quantidadeCarrinho = useQuantidadeCarrinho();

    return (
        <header className="header-bg">
            <nav className="header container">
                <a href="/"><img src={logo} alt="Logo" /></a>
                <div className="busca">
                    <input
                        type="text"
                        placeholder="Buscar produto"
                        className="campo-busca"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            if (props.onSearch) {
                                props.onSearch(e.target.value);
                            }
                        }}
                    />
                    <button className="btn-buscar">
                        <img src={iconeBusca} alt="Ícone de Busca" />
                        Buscar
                    </button>
                </div>
                <Link to="/carrinho" className="header-carrinho">
                    <img src={iconeCarrinho} className="icone-carrinho" />
                    <p>Carrinho
                        {quantidadeCarrinho > 0 &&
                            <span className="contador-carrinho">{quantidadeCarrinho}</span>
                        }
                    </p>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
