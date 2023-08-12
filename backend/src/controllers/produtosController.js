const Produtos = require('../models/Produtos');

exports.getProdutos = async (req, res) => {
    const produtos = await Produtos.getAll();
    res.json(produtos);
};
