-- CreateTable
CREATE TABLE "QuantTopic" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "difficulty" TEXT,
    "gcsPath" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuantTopic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuantTopic_slug_key" ON "QuantTopic"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "QuantTopic_gcsPath_key" ON "QuantTopic"("gcsPath");
