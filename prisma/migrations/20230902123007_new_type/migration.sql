-- CreateEnum
CREATE TYPE "Type" AS ENUM ('CD', 'TSHIRT');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "type" "Type";
