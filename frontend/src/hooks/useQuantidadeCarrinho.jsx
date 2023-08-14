import { useState, useEffect } from 'react';

const useQuantidadeCarrinho = () => {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/carrinho/quantidade')
      .then(response => response.json())
      .then(data => {
        setQuantidadeCarrinho(data.quantidade);
      })
      .catch(error => {
        console.error("Erro ao buscar a quantidade:", error);
      });
  }, []);

  return quantidadeCarrinho;
}

export default useQuantidadeCarrinho;
