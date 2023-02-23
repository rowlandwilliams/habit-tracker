import { protectedProcedure } from './../trpc';
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const habitRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.habit.findMany();
  }),
  addHabit: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.habit.create({
          data: {
            name: input.name,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }),
});

// [...]
