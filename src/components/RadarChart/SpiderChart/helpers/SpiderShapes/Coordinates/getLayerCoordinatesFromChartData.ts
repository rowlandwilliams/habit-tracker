/**
 * This function iterates over a singular array of data related to ONE spider chart layer and returns an
 * array of coordinates that can then be used to plot a spider shape
 */

import { getPathCoordinates } from "./getPathCoordinates";

export const getLayerCoordinatesFromChartData = (
  spiderChartData: {
    [key: string]: number;
  }[],
  width = 400
) => {
  console.log(spiderChartData);
  return [spiderChartData].map((layer) => getPathCoordinates(layer, width));
};
