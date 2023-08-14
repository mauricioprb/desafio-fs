import { useState, useEffect } from 'react';
import axios from 'axios';

const useProdutosCarrinho = () => {
  const [produtos, setProdutos] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchDados = async () => {
    try {
      // Fetch produtos
      const responseProdutos = await axios.get('http://localhost:3000/carrinho/produtos');
      setProdutos(responseProdutos.data.produtos);

      // Fetch total
      const responseTotal = await axios.get('http://localhost:3000/carrinho/total');
      setTotal(responseTotal.data.total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Chama a função uma vez para obter os dados iniciais
    fetchDados();
  }, []);

  const deleteProduto = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/carrinho/${id}`);

      if (response.status === 200) {
        // Atualiza a lista de produtos após exclusão
        setProdutos((prevProdutos) => prevProdutos.filter(produto => produto.id !== id));

        // Refetch dados após exclusão
        fetchDados();
      } else {
        console.error('Erro ao excluir produto:', response.data);
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  return { produtos, total, deleteProduto };
}

export default useProdutosCarrinho;
