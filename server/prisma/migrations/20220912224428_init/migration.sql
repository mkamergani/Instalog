/*
  Warnings:

  - You are about to drop the column `occured_at` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "occured_at",
ADD COLUMN     "occurred_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
