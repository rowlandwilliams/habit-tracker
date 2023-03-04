import { scaleLinear } from "d3-scale";

// scale values to fit on svg
// https://www.d3indepth.com/scales/
export const radialScale = (domainArray: number[], rangeArray: number[]) => {
  return scaleLinear().domain(domainArray).range(rangeArray);
};
