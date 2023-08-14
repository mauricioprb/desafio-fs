import React from "react";
import "../css/components/botaoQuantidade.css";

const BotaoQuantidade = ({ quantidade, incrementar, decrementar }) => {
  return (
    <div className="botao-quantidade">
      <span className="decremento" onClick={decrementar}>-</span>
      <span className="quantidade">{quantidade}</span>
      <span className="incremento" onClick={incrementar}>+</span>
    </div>
  );
}

export default BotaoQuantidade;
