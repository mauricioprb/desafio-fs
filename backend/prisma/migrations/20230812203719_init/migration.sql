-- CreateTable
CREATE TABLE `Produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `url_imagem` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Carrinho` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_produto` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Carrinho` ADD CONSTRAINT `Carrinho_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
