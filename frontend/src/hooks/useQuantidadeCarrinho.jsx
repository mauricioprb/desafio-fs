import { useState, useEffect } from 'react';

const useQuantidadeCarrinho = () => {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  useEffect(() => {
    const fetchQuantidade = async () => {
      try {
        const response = await fetch('http://localhost:3000/carrinho/quantidade');
        const data = await response.json();
        setQuantidadeCarrinho(data.quantidade);
      } catch (error) {
        console.error("Erro ao buscar a quantidade:", error);
      }
    };

    fetchQuantidade();

    const interval = setInterval(fetchQuantidade, 300);

    return () => clearInterval(interval);
  }, []);

  return quantidadeCarrinho;
}

export default useQuantidadeCarrinho;
