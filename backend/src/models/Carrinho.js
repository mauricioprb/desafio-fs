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

    static async removerProdutoCarrinho(id) {
      return await prisma.carrinho.delete({
          where: {
              id: parseInt(id)
          }
      });
    }
}

module.exports = Carrinho;
