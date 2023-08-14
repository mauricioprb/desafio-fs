const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');

router.post('/', carrinhoController.adicionarProdutoCarrinho);
router.get('/produtos', carrinhoController.listarProdutosCarrinho);
router.get('/quantidade', carrinhoController.getQuantidadeCarrinho);
router.get('/total', carrinhoController.getTotalCarrinho);
router.delete('/:id', carrinhoController.removerProdutoCarrinho);

module.exports = router;
