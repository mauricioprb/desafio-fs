import React from 'react';
import Modal from 'react-modal';
import '../css/components/modalCarrinho.css';

const ModalCarrinho = ({ isOpen, onRequestClose, produtosCarrinho, onRemove }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {produtosCarrinho.map(produto => (
        <div key={produto.id} className="cart-item">
          <img src={produto.imagem} alt={produto.titulo} />
          <p>{produto.titulo}</p>
          <p>{produto.preco.toFixed(2)}</p>
          <p>{produto.quantidade}</p>
          <button onClick={() => onRemove(produto.id)}>Remover</button>
        </div>
      ))}
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
}

export default ModalCarrinho;
