/*
  Warnings:

  - You are about to drop the `product_options_pictures` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product_options_pictures` DROP FOREIGN KEY `product_options_pictures_product_option_id_fkey`;

-- DropTable
DROP TABLE `product_options_pictures`;

-- CreateTable
CREATE TABLE `product_option_pictures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `is_avatar` BOOLEAN NOT NULL DEFAULT false,
    `product_option_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_option_pictures` ADD CONSTRAINT `product_option_pictures_product_option_id_fkey` FOREIGN KEY (`product_option_id`) REFERENCES `product_options`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
