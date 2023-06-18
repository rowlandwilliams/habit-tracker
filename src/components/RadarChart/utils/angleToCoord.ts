
/**
 * This function uses trigonometry to calulcate the end coordinate of each axis originating from the center of the chart
 * Along with the centre coordinate, this coordinate pair can then be used to plot an axis line from the center to generated coordinate
 *
 * Values are scaled radially (see radialScale) in order to generate the correct final coordinate
 * https://www.d3indepth.com/scales/
 * @param {number[]} domainArray this is used to define the domain of the scale
 * @param {number[]} rangeArray this is used to define the range of the scale
 */

import { radialScale } from "./radialScale";

interface Props {
  angle: number;
  value: number;
  width: number;
  domainArray: number[];
  rangeArray: number[];
}

export const angleToCoord = ({
  angle,
  value,
  width,
  domainArray,
  rangeArray,
}: Props) => {
  const scale = radialScale(domainArray, rangeArray);

  const x = width / 2 + Math.cos(angle) * scale(value);
  const y = width / 2 - Math.sin(angle) * scale(value);

  const coords: [number, number] = [x, y];

  return coords;
};
