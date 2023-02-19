import { createTRPCRouter, publicProcedure } from "../trpc";

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
    // return ctx.prisma.habitData.findMany({
    //   where: { date: { gte: weekAgo } },
    // });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.habitData.findMany({
      where: { date: { gte: weekAgo } },
    });
  }),
});

// [...]
