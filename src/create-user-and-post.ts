import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      email: "shubham@gmail.com",
      name: "Shubham Goyal",
      posts: {
        create: [
          {
            title: "Post 1",
            content: "Content 1",
          },
          {
            title: "Post 2",
            content: "Content 2",
            published: true,
          },
        ],
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
