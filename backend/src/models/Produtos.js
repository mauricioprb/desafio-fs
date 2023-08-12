const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Produtos {
    static async getAll() {
        return await prisma.produtos.findMany();
    }
}

module.exports = Produtos;
