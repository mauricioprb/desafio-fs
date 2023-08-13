import { useState } from 'react';

const useCarrinho = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [produtosCarrinho, setProdutosCarrinho] = useState([
    { id: 1, imagem: 'url-do-produto1.jpg', titulo: 'Produto 1', preco: 10.00, quantidade: 2 },
    { id: 2, imagem: 'url-do-produto2.jpg', titulo: 'Produto 2', preco: 20.00, quantidade: 1 },
  ]);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const removerProduto = (idProduto) => {
    const novosProdutos = produtosCarrinho.filter(produto => produto.id !== idProduto);
    setProdutosCarrinho(novosProdutos);
  }

  return {
    isModalOpen,
    produtosCarrinho,
    openModal,
    closeModal,
    removerProduto
  };
}

export default useCarrinho;
