import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { protectedProcedure } from "./../trpc";

const today = new Date();
const weekAgo = new Date(today.setDate(today.getDate() - 7));

export const habitDataRouter = createTRPCRouter({
  getWeekSummary: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.habitData.groupBy({
      by: ["habitId"],
      _count: {
        completed: true,
      },
      where: { date: { gte: weekAgo }, completed: true },
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.habitData.findMany({
      where: { date: { gte: weekAgo } },
    });
  }),
  getNDays: protectedProcedure
    .input(
      z.object({
        habitName: z.string(),
        nDays: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { habitName, nDays } = input;

      console.log(habitName, "hell");
      const today = new Date();
      const nDaysAgo = new Date(today.setDate(today.getDate() - nDays));

      const data = await ctx.prisma.habitData.findMany({
        where: { date: { gte: nDaysAgo }, habitId: 1 },
        orderBy: { date: "asc" },
      });

      return data;
    }),
});

// [...]
