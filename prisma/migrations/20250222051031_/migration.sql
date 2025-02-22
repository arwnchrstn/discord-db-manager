-- CreateTable
CREATE TABLE "DiscordData" (
    "id" SERIAL NOT NULL,
    "authorId" VARCHAR(50) NOT NULL,
    "dateSent" TIMESTAMP(3) NOT NULL,
    "isMessageProfane" BIT NOT NULL,
    "isMessageContainingUrl" BIT NOT NULL,
    "isMessageContainingImage" BIT NOT NULL,

    CONSTRAINT "DiscordData_pkey" PRIMARY KEY ("id")
);
