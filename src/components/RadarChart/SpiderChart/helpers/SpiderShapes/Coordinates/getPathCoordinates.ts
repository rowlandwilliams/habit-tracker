/**
 * This function returns the coordinates of a given score of a given indicator metric (e.g. climate change, biodiversity etc..)
 *  along its respective axis.
 *
 * When we have 6 coordinates for a particular layer (e.g Your Investments or Apple, Microsoft etc...) we can combine these into a path to
 * generate the spider shape (this part is handled in getLayerCoordinates)
 */

import { angleToCoord } from "../../common/angleToCoord";
import { nVertices } from "../../common/nVertices";

// get coordinates for a single spider chart data layer

const features: string[] = ["completed"];

export const getPathCoordinates = (
  data_point: { [key: string]: number },
  width: number
) => {
  const coordinates = [] as [number, number][];
  for (let i = 0; i < nVertices; i += 1) {
    const ftName = features[i];
    const angle = Math.PI / 2 + (2 * Math.PI * i) / nVertices;
    coordinates.push(
      angleToCoord({
        angle,
        value: data_point[ftName],
        width,
        domainArray: [0, 10],
        rangeArray: [0, width / 2 - 50],
      })
    );
  }
  return coordinates;
};
