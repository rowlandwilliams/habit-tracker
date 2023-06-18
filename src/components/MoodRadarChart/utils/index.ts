import { curveCatmullRomClosed, line } from "d3-shape";
import { getLevelCoords } from "./getLevelCoords";
import { levelCoordsToDiagonal } from "./levelCoordsToDiagonal";

export const lineGenerator = line()
  .x((d) => d[0])
  .y((d) => d[1])
  .curve(curveCatmullRomClosed);

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
