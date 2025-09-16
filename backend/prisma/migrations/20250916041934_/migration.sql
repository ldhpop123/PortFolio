/*
  Warnings:

  - You are about to drop the `ItemContent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PortFolioItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ItemContent" DROP CONSTRAINT "ItemContent_portfolioItemId_fkey";

-- DropTable
DROP TABLE "public"."ItemContent";

-- DropTable
DROP TABLE "public"."PortFolioItem";

-- CreateTable
CREATE TABLE "public"."PortFolioItems" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PortFolioItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemContents" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "portfolioItemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemContents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ItemContents" ADD CONSTRAINT "ItemContents_portfolioItemId_fkey" FOREIGN KEY ("portfolioItemId") REFERENCES "public"."PortFolioItems"("id") ON DELETE CASCADE ON UPDATE CASCADE;
