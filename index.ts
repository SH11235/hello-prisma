import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // create user sample
  await prisma.user.create({
    data: {
      name: "11235",
      email: "11235@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });

  // update user sample
  await prisma.user.update({
    data: {
      name: "11235",
      email: "11235@prisma.io",
      posts: {
        create: { title: "Hello New World" },
      },
      profile: {
        update: { bio: "I like turtles" },
      },
    },
    where: {
      id: 1,
    },
  });

  // get user sample
  const usersWithPostsProfile = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(usersWithPostsProfile, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
