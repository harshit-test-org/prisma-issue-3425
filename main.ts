import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const data = await prisma.user.aggregate({
    sum: {
      marks: true,
    },
  });
  console.log(data);
  prisma.$disconnect();
}

main();
