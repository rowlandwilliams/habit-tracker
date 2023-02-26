import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { protectedProcedure } from "./../trpc";

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

  deleteHabit: publicProcedure
    .input(z.object({ habitId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.habitData.deleteMany({
          where: {
            habitId: input.habitId,
          },
        });

        await ctx.prisma.habit.delete({
          where: {
            id: input.habitId,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }),
});

// [...]
