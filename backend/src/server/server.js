const express = require('express');
const produtoRoutes = require('../routes/produtosRoutes');
const carrinhoRoutes = require('../routes/carrinhoRoutes');

const app = express();
app.use(express.json());

app.use('/', produtoRoutes);
app.use('/carrinho', carrinhoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
