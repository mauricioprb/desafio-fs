import { useState, useEffect } from 'react';

const useProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return produtos;
}

export default useProdutos;
