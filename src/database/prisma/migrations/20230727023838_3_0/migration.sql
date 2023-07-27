/*
  Warnings:

  - You are about to drop the column `price` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `pictures` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pictures` DROP FOREIGN KEY `Pictures_productId_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `price`,
    ADD COLUMN `avatar` VARCHAR(191) NULL,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `des` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `pictures`;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_options` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `price` DOUBLE NULL,
    `stock` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `product_id` INTEGER NOT NULL,

    UNIQUE INDEX `product_options_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_options_pictures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `is_avatar` BOOLEAN NOT NULL DEFAULT false,
    `product_option_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_options` ADD CONSTRAINT `product_options_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_options_pictures` ADD CONSTRAINT `product_options_pictures_product_option_id_fkey` FOREIGN KEY (`product_option_id`) REFERENCES `product_options`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
