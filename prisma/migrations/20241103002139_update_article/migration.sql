/*
  Warnings:

  - You are about to drop the column `image_url` on the `articles` table. All the data in the column will be lost.
  - Added the required column `image_id` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "articles" DROP COLUMN "image_url",
ADD COLUMN     "image_id" VARCHAR(255) NOT NULL;
