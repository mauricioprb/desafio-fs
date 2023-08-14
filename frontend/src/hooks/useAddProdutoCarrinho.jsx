import { useCallback } from 'react';

const useAddProdutoCarrinho = (id, quantidade) => {

  const adicionarAoCarrinho = useCallback(() => {
    fetch('http://localhost:3000/carrinho/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_produto: id,
        quantidade: quantidade
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Produto adicionado com sucesso ao carrinho.');
        } else {
          console.error('Erro ao adicionar produto ao carrinho.');
        }
      })
      .catch(error => console.error('Erro ao adicionar produto ao carrinho:', error));
  }, [id, quantidade]);

  return adicionarAoCarrinho;
}

export default useAddProdutoCarrinho;