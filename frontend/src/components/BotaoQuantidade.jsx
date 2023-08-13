import React from "react";
import "../css/components/botaoQuantidade.css";

const BotaoQuantidade = ({ quantidade }) => {
  return (
    <div className="botao-quantidade">
      <span className="decremento">-</span>
      <span className="quantidade">{quantidade}</span>
      <span className="incremento">+</span>
    </div>
  );
}

export default BotaoQuantidade;