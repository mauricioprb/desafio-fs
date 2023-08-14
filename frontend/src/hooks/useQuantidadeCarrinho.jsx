import { useState, useEffect } from 'react';
import axios from 'axios';

const useQuantidadeCarrinho = () => {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  useEffect(() => {
    const fetchQuantidade = async () => {
      try {
        const response = await axios.get('http://localhost:3000/carrinho/quantidade');
        setQuantidadeCarrinho(response.data.quantidade);
      } catch (error) {
        console.error("Erro ao buscar a quantidade:", error);
      }
    };

    fetchQuantidade();

    const interval = setInterval(fetchQuantidade, 30000);

    return () => clearInterval(interval);
  }, []);

  return quantidadeCarrinho;
}

export default useQuantidadeCarrinho;
