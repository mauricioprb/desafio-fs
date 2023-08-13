const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Carrinho {
    static async adicionarProdutoCarrinho(data) {
        return await prisma.carrinho.create({ data });
    }

    static async getTodosProdutos() {
        return await prisma.carrinho.findMany({
            include: {
                produto: true,
            },
        });
    }

    static async getProdutoPorId(id_produto) {
        return await prisma.carrinho.findFirst({
            where: {
                id_produto: id_produto
            },
            include: {
                produto: true
            }
        });
    }

    static async atualizarQuantidade(id, quantidade) {
        return await prisma.carrinho.update({
            where: {
                id: id
            },
            data: {
                quantidade: quantidade
            }
        });
    }

    static async removerProdutoCarrinho(id) {
        return await prisma.carrinho.delete({
            where: {
                id: parseInt(id)
            }
        });
    }
}

module.exports = Carrinho;
