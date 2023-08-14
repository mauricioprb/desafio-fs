import React from 'react';
import useProdutosCarrinho from '../hooks/useProdutosCarrinho';
import '../css/global/global.css';
import '../css/pages/carrinho.css';
import logo from '../img/logo.svg';
import excluir from '../img/icons/excluir.svg';
import Footer from '../components/Footer';

const Carrinho = () => {
  const { produtos, total, deleteProduto } = useProdutosCarrinho();

  return (
    <div>
      <header className="header-bg">
        <nav className="header container">
          <a href="/"><img src={logo} alt="Logo" /></a>
        </nav>
      </header>

      <div>
        <div className="carrinho container">
          <ul className="produto-lista">
            {produtos.map(produto => (
              <li key={produto.id} className="produto-card">
                <img className="produto-imagem" src={produto.produto.url_imagem} alt={produto.produto.titulo} />
                <div className="produto-info">
                  <p className="produto-titulo">{produto.produto.titulo}</p>
                  <p className="produto-quantidade">Quantidade: {produto.quantidade}</p>
                  <p className="produto-preco">Preço: ${produto.produto.preco.toFixed(2)}</p>
                </div>
                <img className='excluir' onClick={() => deleteProduto(produto.id)} src={excluir} />
              </li>
            ))}
          </ul>
          <div className='total'>
            <p className='total-titulo'>Total do Carrinho</p>
            <div className='total-card'>
              <span className='total-preco'>R$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Carrinho;
