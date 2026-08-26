import prisma from "../Config/prisma.js";

async function testDatabase() {
  try {
    await prisma.$connect();

    console.log("✅ PostgreSQL connected successfully!");

    const result = await prisma.quantTopic.count();

    console.log("Quant topics:", result);
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();