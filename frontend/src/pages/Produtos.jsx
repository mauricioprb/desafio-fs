import React, { useState } from 'react';
import '../css/global/global.css';
import '../css/pages/produtos.css';
import Header from '../components/Header';
import CardProduto from '../components/CardProduto';
import Footer from '../components/Footer';
import useProdutos from '../hooks/useProdutos';

const Produto = () => {
    const allProdutos = useProdutos();
    const [query, setQuery] = useState("");
    const filteredProdutos = allProdutos.filter(produto => produto.titulo.toLowerCase().includes(query.toLowerCase()));

    return (
        <div>
            <Header onSearch={(q) => setQuery(q)} />
            <div className="container cards-produto">
                {filteredProdutos.map(produto => (
                    <CardProduto
                        key={produto.id}
                        imagem={produto.url_imagem}
                        titulo={produto.titulo}
                        preco={produto.preco}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Produto;