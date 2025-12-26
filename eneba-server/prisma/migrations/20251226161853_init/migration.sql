-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "likes" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "platform" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
