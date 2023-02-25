import type { HabitData } from "@prisma/client";
export const getLineColor = (
  data: HabitData[],
  completed: boolean,
  i: number
) => {
  const nextDayIsEqual = data[i + 1]?.completed === completed;
  switch (true) {
    case completed && nextDayIsEqual:
      return "stroke-teal-500";
    case !completed && nextDayIsEqual:
      return "stroke-rose-500";
  }
};
