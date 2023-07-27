/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatar` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `product_options` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `product_options` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stock` on table `product_options` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `des` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `categories` ADD COLUMN `avatar` VARCHAR(191) NOT NULL,
    ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `product_options` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `price` DOUBLE NOT NULL,
    MODIFY `stock` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `avatar` VARCHAR(191) NOT NULL,
    MODIFY `des` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `categories_title_key` ON `categories`(`title`);
