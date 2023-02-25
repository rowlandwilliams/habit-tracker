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
        habitId: z.number(),
        nDays: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      const { habitId, nDays } = input;
      const nDaysAgo = new Date(today.setDate(today.getDate() - nDays));
      return ctx.prisma.habitData.findMany({
        where: { date: { gte: nDaysAgo }, habitId },
      });
    }),
});

// [...]
