import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here

  //it will show 3 posts --> Can work on pagination to show only 3 posts
  let res = await prisma.post.findMany({
    take: 3, //limit in sql
    skip: 2, //offset in sql
  });
}

main()
  .then(async () => {
    console.log("Done with the query");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
