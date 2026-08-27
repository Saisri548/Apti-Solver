-- CreateTable
CREATE TABLE "EnglishTopic" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "difficulty" TEXT,
    "filePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EnglishTopic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EnglishTopic_slug_key" ON "EnglishTopic"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "EnglishTopic_filePath_key" ON "EnglishTopic"("filePath");
