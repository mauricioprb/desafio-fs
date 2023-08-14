import { useState, useEffect } from 'react';

const useProdutosCarrinho = () => {
  const [produtos, setProdutos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        // Fetch produtos
        let response = await fetch('http://localhost:3000/carrinho/produtos');
        let data = await response.json();
        setProdutos(data.produtos);

        // Fetch total
        response = await fetch('http://localhost:3000/carrinho/total');
        data = await response.json();
        setTotal(data.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Chama o método uma vez para obter os dados iniciais
    fetchDados();

    // Define um intervalo para buscar dados a cada 0.3 segundos
    const interval = setInterval(fetchDados, 300);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  const deleteProduto = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/carrinho/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Atualiza a lista de produtos após exclusão
        setProdutos((prevProdutos) => prevProdutos.filter(produto => produto.id !== id));
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
