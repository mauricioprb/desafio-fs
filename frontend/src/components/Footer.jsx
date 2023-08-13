import React from "react";
import "../css/components/footer.css";

const Footer = () => {
  const ano = new Date().getFullYear(); // Obtém o ano atual

  return (
    <footer className="footer-bg">
      <div className="container footer">
        <p>🏪 Loja - Nenhum direito reservado &copy; {ano}</p>
      </div>
    </footer>
  );
}

export default Footer;
