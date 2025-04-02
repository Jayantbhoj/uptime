/*
  Warnings:

  - A unique constraint covering the columns `[userNo]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userNo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userNo" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_userNo_key" ON "User"("userNo");
