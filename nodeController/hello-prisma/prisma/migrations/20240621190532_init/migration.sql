-- CreateTable
CREATE TABLE "boots" (
    "id" SERIAL NOT NULL,
    "bootsName" VARCHAR(255) NOT NULL,
    "bootsMaterial" VARCHAR(255) NOT NULL,
    "bootsBrand" VARCHAR(255) NOT NULL,
    "bootsType" VARCHAR(255) NOT NULL,
    "bootsPosition" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "boots_pkey" PRIMARY KEY ("id")
);
