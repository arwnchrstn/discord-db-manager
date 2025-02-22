import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()

const insertToDatabase = async (data: any) => {
  try {
    await prismaClient.discordData.create({
      data: data,
    })
  } catch (error) {
    console.log(error)
    throw new Error('Failed to insert data')
  }
}

export default insertToDatabase