import React from "react";
import "../css/components/cardProduto.css";
import BotaoQuantidade from "./BotaoQuantidade";

const CardProduto = ({ imagem, titulo, preco }) => {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} className="produto-imagem" />
      <h2>{titulo}</h2>
      <p className="card-preco">R$ {preco}</p>
      <BotaoQuantidade quantidade="2" />
      <p><button>Adicionar ao Carrinho</button></p>
    </div>
  );
}

export default CardProduto;