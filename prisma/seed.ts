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
const weekOfDates = [...Array(7)].map((day, i) => {
  const today = new Date();
  today.setDate(today.getDate() - 1 * i);

  return today;
});

const weekMoods = [
  { name: "Depressed", data: [9, 9, 7, 6, 6, 9, 10] },
  { name: "Motivated", data: [2, 1, 2, 3, 1, 0, 0] },
  { name: "Creative", data: [4, 1, 5, 3, 2, 0, 2] },
  { name: "Anxious", data: [9, 7, 6, 8, 10, 9, 8] },
  { name: "Tired", data: [10, 10, 10, 10, 9, 8, 7] },
  { name: "Positive", data: [1, 1, 2, 3, 1, 0, 0] },
  { name: "Fearful", data: [9, 8, 7, 7, 7, 9, 8] },
  { name: "Angry", data: [6, 6, 7, 5, 5, 4, 6] },
  { name: "Fulfilled", data: [0, 4, 5, 2, 1, 0, 0] },
  { name: "Relaxed", data: [1, 1, 2, 3, 1, 0, 0] },
  { name: "Bored", data: [10, 9, 8, 6, 6, 7, 8] },
  { name: "Calm", data: [10, 9, 8, 6, 6, 7, 8] },
];

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
      { name: "Calm", moodSentimentId: 1 },
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
    .map(({ id, name }) =>
      weekOfDates.map((date, i) => ({
        date,
        score: weekMoods.find((mood) => mood.name === name)?.data[i] as number,
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
