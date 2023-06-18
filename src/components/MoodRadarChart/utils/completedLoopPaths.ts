import { lineGenerator } from ".";

export const getCompletedLoopPaths = ({
  completedCoordinates,
}: {
  completedCoordinates: {
    habit: string;
    value: number;
    coords: [number, number];
  }[];
}) => {
  const completedLoop = lineGenerator(
    completedCoordinates.map(({ coords }) => coords)
  );

  const completedLoopCurveSections = completedLoop?.split("C");
  const nSections = completedLoopCurveSections?.length;

  const completedLoopCurveSectionsAsDPaths = completedLoopCurveSections?.map(
    (section, i) => {
      const curveStartCoords =
        nSections && i < nSections - 1
          ? completedCoordinates[i]?.coords.join(",")
          : completedCoordinates[0]?.coords.join(",");

      return curveStartCoords ? `M${curveStartCoords}C${section}` : null;
    }
  );

  return completedLoopCurveSectionsAsDPaths;
};
