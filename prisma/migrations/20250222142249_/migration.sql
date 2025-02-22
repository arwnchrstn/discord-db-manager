/*
  Warnings:

  - Changed the type of `isMessageProfane` on the `DiscordData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `isMessageContainingUrl` on the `DiscordData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `isMessageContainingImage` on the `DiscordData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "DiscordData" DROP COLUMN "isMessageProfane",
ADD COLUMN     "isMessageProfane" INTEGER NOT NULL,
DROP COLUMN "isMessageContainingUrl",
ADD COLUMN     "isMessageContainingUrl" INTEGER NOT NULL,
DROP COLUMN "isMessageContainingImage",
ADD COLUMN     "isMessageContainingImage" INTEGER NOT NULL;
