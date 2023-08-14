import React from "react";
import "../css/components/cardProduto.css";
import BotaoQuantidade from "./BotaoQuantidade";
import useQuantidade from "../hooks/useQuantidade";
import useAddProdutoCarrinho from "../hooks/useAddProdutoCarrinho";

const CardProduto = ({ id, imagem, titulo, preco }) => {
  const { quantidade, incrementar, decrementar } = useQuantidade(2);
  const adicionarAoCarrinho = useAddProdutoCarrinho(id, quantidade);


  return (
    <div className="card">
      <div className="imagem-container">
        <img src={imagem} alt={titulo} className="produto-imagem" />
      </div>
      <h2>{titulo}</h2>
      <p className="card-preco">R$ {preco}</p>
      <BotaoQuantidade quantidade={quantidade} incrementar={incrementar} decrementar={decrementar} />
      <button onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default CardProduto;
