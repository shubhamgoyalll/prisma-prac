import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//If need to see the logs and query
//const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data: {
      title: "Learning how to code",
      content: "I am learning diff ORMs and diff databases",
      published: true,
      author: {
        connect: {
          id: 1,
        },
      }, // or we can do just do authorId : 1
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
