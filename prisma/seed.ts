import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const surfspot = await prisma.surfSpot.create({
    data: { name: "Watersplash", latitude: 49.210967, longitude: -2.224461 },
  });
  console.log(surfspot);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
