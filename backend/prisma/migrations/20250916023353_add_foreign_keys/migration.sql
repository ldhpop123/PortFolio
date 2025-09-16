/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Item";

-- CreateTable
CREATE TABLE "public"."PortFolioItem" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PortFolioItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemContent" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "portfolioItemId" INTEGER NOT NULL,

    CONSTRAINT "ItemContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ItemContent" ADD CONSTRAINT "ItemContent_portfolioItemId_fkey" FOREIGN KEY ("portfolioItemId") REFERENCES "public"."PortFolioItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
