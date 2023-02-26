import { select } from "d3-selection";
import { plotGridLines } from "./GridLines/plotGridLines";
import { generateSpiderChartData } from "./SpiderShapes/Data/generateSpiderChartData";
import { plotSpiderShapes } from "./SpiderShapes/plotSpiderShapes";

export const plotSpiderChart = () => {
  // generate 2 datasets
  const spiderChartData = generateSpiderChartData(2);

  // remove any old svg
  select("#spider svg").remove();

  // initialize a new svg
  const svg = d3
    .select("#spider")
    .append("svg")
    .attr("viewBox", "0, 0, 400, 400");

  plotGridLines(svg);

  plotSpiderShapes(svg, spiderChartData);
};
