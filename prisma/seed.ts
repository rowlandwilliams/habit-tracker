/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PrismaClient } from "@prisma/client";
import { sqltag } from "@prisma/client/runtime";

const prisma = new PrismaClient();
async function main() {
  await prisma.$executeRaw(
    sqltag`TRUNCATE TABLE "HabitData" RESTART IDENTITY CASCADE;`
  );
  await prisma.$executeRaw(
    sqltag`TRUNCATE TABLE "Habit" RESTART IDENTITY CASCADE;`
  );

  await prisma.habit.createMany({
    data: [
      { name: "Meditate" },
      { name: "Go for a run" },
      { name: "Drawing" },
      { name: "Connect" },
      { name: "Make bed" },
      { name: "Plan life" },
      { name: "Code" },
      { name: "Eat Healthy" },
    ],
  });

  const habits = await prisma.habit.findMany();

  const yearOfDates = [...Array(365)].map((day, i) => {
    const today = new Date();
    today.setDate(today.getDate() - 1 * i);

    return today;
  });

  const sampleData = habits
    .map(({ id }) =>
      yearOfDates.map((date) => ({
        date,
        completed: Math.random() < 0.5,
        habitId: id,
      }))
    )
    .flat();

  await prisma.habitData.createMany({
    data: sampleData,
  });
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
