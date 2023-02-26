import { angleToCoord } from "../common/angleToCoord";
import { getLevelCoords } from "./getLevelCoords";
import { levelCoordsToDiagonal } from "./levelCoordsToDiagonal";

export const plotGridLines = (
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, undefined>,
  nVertices: number,
  width = 400,
  height = 400
) => {
  // define the levels for the spider grid lines
  const levels = [0, 2, 4, 6, 8, 10];

  // at each level (0 = middle, 10=outeredge) generate required lines (orientated) and add to svg
  levels.forEach((level, i) => {
    // define angle for each line (6 at each level)
    const angle = Math.PI / 2 + (2 * Math.PI * i) / nVertices;

    // use angle to work out the end coordinate of each line
    // domainArray is [0, 10] as scores can be between 0 and 10
    // rangeArray is [0, width / 2 - 50] as each axis line is half the size of the chart radius and we want some padding -
    // (50px between the chart and the outside of the svg (to fit labels in))
    const axisCoordinate = angleToCoord(
      angle,
      10,
      width,
      [0, 10],
      [0, width / 2 - 50]
    );

    // append axislines starting from center of svg
    svg
      .append("line")
      .attr("x1", width / 2)
      .attr("y1", height / 2)
      .attr("x2", axisCoordinate[0])
      .attr("y2", axisCoordinate[1])
      .attr("stroke", "grey")
      .attr("stroke-width", "2");

    // then create coordinates for each level along each axis line
    const levelCoords = getLevelCoords(
      level,
      width,
      [0, 10],
      [0, width / 2 - 50]
    );

    // convert level coords to diagonal line coords between current axis and next (clockwise)
    const diagonalCoords = levelCoordsToDiagonal(levelCoords);

    // plot diagonals
    diagonalCoords.forEach((x) => {
      svg
        .append("line")
        .attr("x1", x.x0)
        .attr("y1", x.y0)
        .attr("x2", x.x1)
        .attr("y2", x.y1)
        .attr("stroke", "grey")
        .attr("stroke-width", "2");
    });
  });
};
