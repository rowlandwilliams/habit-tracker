import { habitRouter } from "./routers/habit";
import { habitDataRouter } from "./routers/habitData";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  habit: habitRouter,
  habitData: habitDataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
