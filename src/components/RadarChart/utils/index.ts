import { getLevelCoords } from "./getLevelCoords";
import { levelCoordsToDiagonal } from "./levelCoordsToDiagonal";

export const getDiagonalLineData = (
  days: number[],
  nVertices: number,
  graphDim: number
) =>
  days.map((day) => {
    const levelCoords = getLevelCoords({
      nVertices,
      level: day,
      width: graphDim,
      domainArray: [0, days.length],
      rangeArray: [0, graphDim / 2],
    });
    const diagonalCoords = levelCoordsToDiagonal(levelCoords);

    return { day, diagonalCoords };
  });
