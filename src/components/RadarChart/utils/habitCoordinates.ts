import { angleToCoord } from "./angleToCoord";

export const getHabitCoordinates = ({
  habits,
  isTarget,
  nVertices,
  graphDim,
  nDays,
}: {
  habits: { name: string; daysCompleted: number; target: number }[];
  isTarget: boolean;
  nVertices: number;
  graphDim: number;
  nDays: number;
}) => {
  const half = graphDim / 2;
  return habits.map(({ name, target, daysCompleted }, i) => {
    const angle = Math.PI / 2 + (2 * Math.PI * i) / nVertices;
    const value = isTarget ? target : daysCompleted;

    const coords = angleToCoord({
      angle,
      value,
      width: graphDim,
      domainArray: [0, nDays],
      rangeArray: [0, half],
    });

    return { habit: name, value, coords };
  });
};
