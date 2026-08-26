/*
  Warnings:

  - You are about to drop the column `content` on the `QuantTopic` table. All the data in the column will be lost.
  - You are about to drop the column `gcsPath` on the `QuantTopic` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `QuantTopic` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[filePath]` on the table `QuantTopic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `filePath` to the `QuantTopic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `QuantTopic` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "QuantTopic_gcsPath_key";

-- AlterTable
ALTER TABLE "QuantTopic" DROP COLUMN "content",
DROP COLUMN "gcsPath",
DROP COLUMN "title",
ADD COLUMN     "filePath" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "QuantTopic_filePath_key" ON "QuantTopic"("filePath");
