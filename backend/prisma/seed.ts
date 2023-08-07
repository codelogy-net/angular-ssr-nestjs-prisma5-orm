import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'timothy.mccormick@example.com',
      name: 'Timothy McCormick',
      tasks: {
        createMany: {
          data: [
            {
              name: 'Adjust the website design so it works and looks nice on all types of devices, like phones, tablets, and computers.'
            },
            {
              name: 'Make the website load quickly and run smoothly by making pictures smaller.'
            }
          ]
        }
      },
    },
  });
  await prisma.user.create({
    data: {
      email: 'mary.choate@example.com',
      name: 'Mary Choate',
      tasks: {
        createMany: {
          data: [
            {
              name: 'Write code to check that the information entered in forms.'
            },
            {
              name: 'Use JavaScript to add animations to different parts of the website.'
            }
          ]
        }
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
;
