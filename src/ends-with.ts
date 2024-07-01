import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  let res = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "@gmail.com",
      },
      posts: {
        // has atleast one post published
        some: {
          published: true,
        },
      },
    },
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
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
