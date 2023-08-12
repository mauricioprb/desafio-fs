const Carrinho = require('../models/Carrinho');

exports.adicionarProdutoCarrinho = async (req, res) => {
    const { id_produto, quantidade } = req.body;

    if (!id_produto || quantidade === undefined) {
        return res.status(400).json({ error: 'id_produto e quantidade são campos obrigatórios.' });
    }

    const item = await Carrinho.adicionarProdutoCarrinho({
        id_produto,
        quantidade,
    });
    res.json(item);
};

exports.getTotalCarrinho = async (req, res) => {
    const itens = await Carrinho.getTodosProdutos();
    const total = itens.reduce((acc, item) => acc + (item.produto.preco * item.quantidade), 0);
    res.json({ total });
};

exports.removerProdutoCarrinho = async (req, res) => {
  try {
      const { id } = req.params;
      const itemRemovido = await Carrinho.removerProdutoCarrinho(id);
      res.json({ message: 'Item removido com sucesso!', itemRemovido });
  } catch (error) {
      res.status(500).json({ error: 'Erro ao remover item do carrinho' });
  }
};
