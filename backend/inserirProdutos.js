const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

async function addProdutos() {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'data', 'produtos.json'), 'utf-8');
        const produtos = JSON.parse(data);

        await prisma.produtos.createMany({
            data: produtos
        });

        console.log("Produtos adicionados com sucesso!");

    } catch (error) {
        console.error("Erro ao adicionar produtos:", error);
    } finally {
        await prisma.$disconnect();
    }
}

addProdutos();
