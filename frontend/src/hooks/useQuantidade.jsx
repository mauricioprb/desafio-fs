import { useState } from 'react';

function useQuantidade(initialValue = 1) {
  const [quantidade, setQuantidade] = useState(initialValue);

  const incrementar = () => {
    setQuantidade(prevQuantidade => prevQuantidade + 1);
  };

  const decrementar = () => {
    setQuantidade(prevQuantidade => Math.max(prevQuantidade - 1, 1));
  };

  return {
    quantidade,
    incrementar,
    decrementar,
    setQuantidade
  };
}

export default useQuantidade;
