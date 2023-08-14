import { useState, useEffect } from 'react';

const useProdutosCarrinho = () => {
  const [produtos, setProdutos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch produtos
    fetch('http://localhost:3000/carrinho/produtos')
      .then(response => response.json())
      .then(data => setProdutos(data.produtos))
      .catch(error => console.error('Error fetching products:', error));

    // Fetch total
    fetch('http://localhost:3000/carrinho/total')
      .then(response => response.json())
      .then(data => setTotal(data.total))
      .catch(error => console.error('Error fetching total:', error));
  }, []);

  const deleteProduto = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/carrinho/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Atualiza a lista de produtos após exclusão
        setProdutos((prevProdutos) => prevProdutos.filter(produto => produto.id !== id));

        // Você também pode querer atualizar o total aqui.
      } else {
        console.error('Erro ao excluir produto:', await response.text());
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  return { produtos, total, deleteProduto };
}

export default useProdutosCarrinho;
