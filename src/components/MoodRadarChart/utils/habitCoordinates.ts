import { angleToCoord } from "./angleToCoord";

export const getHabitCoordinates = ({
  moodData,
  nVertices,
  graphDim,
  nLevels,
}: {
  moodData: {
    date: string;
    moods: {
      id: number;
      name: string;
      sentiment: string;
      score: number;
    }[];
  }[];
  nVertices: number;
  graphDim: number;
  nLevels: number;
}) => {
  const half = graphDim / 2;
  return moodData.map(({ date, moods }) => ({
    date,
    moods: moods.map((mood, i) => {
      const angle = Math.PI / 2 + (2 * Math.PI * i) / nVertices;
      const coords = angleToCoord({
        angle,
        value: mood.score,
        width: graphDim,
        domainArray: [0, nLevels],
        rangeArray: [0, half],
      });

      return {
        ...mood,
        coords,
      };
    }),
  }));
};
