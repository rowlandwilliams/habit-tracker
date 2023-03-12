import { createTRPCRouter } from "../trpc";
import { protectedProcedure } from "../trpc";
import { z } from "zod";

export const moodDataRouter = createTRPCRouter({
  getAll: protectedProcedure
    .input(z.array(z.number()))
    .query(({ ctx, input }) => {
      console.log(input);
      return ctx.prisma.$queryRawUnsafe<
        {
          date: string;
          moods: {
            id: number;
            name: string;
            sentiment: string;
            score: number;
          }[];
        }[]
      >(
        `
    SELECT
   DATE,
   json_agg(moods 
ORDER BY
   moods ->> 'sentiment' DESC , moods ->> 'name') AS moods 
FROM
   (
      SELECT
         DATE,
         json_build_object('id', "moodId", 'name', B.name, 'sentiment', C.name, 'score', score) AS moods 
      FROM
         "MoodData" A 
         LEFT JOIN
            "Mood" B 
            ON A."moodId" = B.id 
         LEFT JOIN
            "MoodSentiment" C 
            ON B."moodSentimentId" = C.id 
            WHERE "moodId" = ANY($1)
            ORDER BY
         DATE DESC 
   )
   AS final 
GROUP BY
   DATE LIMIT 7
    
    `,
        input
      );
    }),
});
