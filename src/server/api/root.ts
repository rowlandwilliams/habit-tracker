import { moodDataRouter } from "./routers/moodData";
import { habitRouter } from "./routers/habit";
import { habitDataRouter } from "./routers/habitData";
import { createTRPCRouter } from "./trpc";
import { moodRouter } from "./routers/mood";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  habit: habitRouter,
  habitData: habitDataRouter,
  mood: moodRouter,
  moodData: moodDataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
