-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AVAILABLE', 'PREORDER', 'UNAVAILABLE');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "img" TEXT[],
    "status" "Status" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
