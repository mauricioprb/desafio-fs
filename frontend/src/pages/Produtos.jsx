import React from 'react';
import '../css/global/global.css';
import '../css/pages/produtos.css';
import Header from '../components/Header';
import CardProduto from '../components/CardProduto';
import imagemCerveja from '../img/cerveja.jpg';
import Footer from '../components/Footer';

const Produto = () => {
    return (
        <div>
            <Header />
            <div className="container cards-produto">
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
                <CardProduto imagem={imagemCerveja} titulo="Nome do Produto" preco="99,99" />
            </div>
            <Footer />
        </div>
    );
}

export default Produto;