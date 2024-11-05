/*
  Warnings:

  - Added the required column `image_url` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "articles" ADD COLUMN     "image_url" VARCHAR(511) NOT NULL;
