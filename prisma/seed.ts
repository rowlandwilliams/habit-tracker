/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PrismaClient } from "@prisma/client";
import { sqltag } from "@prisma/client/runtime";

const intFromZeroToTen = () => Math.floor(Math.random() * 11);
const yearOfDates = [...Array(365)].map((day, i) => {
  const today = new Date();
  today.setDate(today.getDate() - 1 * i);

  return today;
});

const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRaw(
    sqltag`TRUNCATE TABLE "HabitData" RESTART IDENTITY CASCADE;`
  );
  await prisma.$executeRaw(
    sqltag`TRUNCATE TABLE "Habit" RESTART IDENTITY CASCADE;`
  );
  await prisma.$executeRaw(
    sqltag`TRUNCATE TABLE "Mood" RESTART IDENTITY CASCADE;`
  );
  await prisma.$executeRaw(
    sqltag`TRUNCATE TABLE "MoodData" RESTART IDENTITY CASCADE;`
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

  await prisma.moodSentiment.createMany({
    data: [{ name: "Positive" }, { name: "Negative" }, { name: "Neutral" }],
  });

  await prisma.mood.createMany({
    data: [
      { name: "Depressed", moodSentimentId: 2 },
      { name: "Motivated", moodSentimentId: 1 },
      { name: "Creative", moodSentimentId: 1 },
      { name: "Anxious", moodSentimentId: 2 },
      { name: "Tired", moodSentimentId: 2 },
      { name: "Positive", moodSentimentId: 1 },
      { name: "Fearful", moodSentimentId: 2 },
      { name: "Angry", moodSentimentId: 2 },
      { name: "Fulfilled", moodSentimentId: 1 },
      { name: "Relaxed", moodSentimentId: 1 },
      { name: "Bored", moodSentimentId: 2 },
    ],
  });

  const habits = await prisma.habit.findMany();
  const moods = await prisma.mood.findMany();

  const sampleHabitData = habits
    .map(({ id }) =>
      yearOfDates.map((date) => ({
        date,
        completed: Math.random() < 0.5,
        habitId: id,
      }))
    )
    .flat();

  const sampleMoodData = moods
    .map(({ id }) =>
      yearOfDates.map((date) => ({
        date,
        score: intFromZeroToTen(),
        moodId: id,
      }))
    )
    .flat();

  await prisma.habitData.createMany({
    data: sampleHabitData,
  });

  await prisma.moodData.createMany({
    data: sampleMoodData,
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
