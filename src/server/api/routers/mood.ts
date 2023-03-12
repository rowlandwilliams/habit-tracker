import { createTRPCRouter } from "../trpc";
import { protectedProcedure } from "../trpc";

export const moodRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.mood.findMany({ orderBy: { moodSentimentId: "asc" } });
  }),
});
