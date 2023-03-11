import React from "react";
import { angleToCoord } from "../../utils/angleToCoord";

interface Props {
  moods:
    | {
        id: number;
        name: string;
        sentiment: string;
        score: number;
      }[]
    | never[];
  nVertices: number;
  visDim: number;
  nLevels: number;
}

export const RadarChartSvgLabels = ({
  moods,
  nVertices,
  visDim,
  nLevels,
}: Props) => {
  return (
    <g>
      {moods.map(({ name }, i) => {
        const angle = Math.PI / 2 + (2 * Math.PI * i) / nVertices;
        const coords = angleToCoord({
          angle,
          value: 10.5,
          width: visDim,
          domainArray: [0, nLevels],
          rangeArray: [0, visDim / 2],
        });
        const isFirstXHalf = coords[0] < visDim / 2;
        const isFirstYHalf = coords[1] < visDim / 2;
        const xPadding = isFirstXHalf ? -5 : 5;
        const yPadding = isFirstYHalf ? -5 : 10;
        const textAnchor = i === 0 ? "middle" : isFirstXHalf ? "end" : "start";
        return (
          <text
            key={name}
            x={coords[0] + xPadding}
            y={coords[1] + yPadding}
            className="fill-gray-400"
            textAnchor={textAnchor}
          >
            {name}
          </text>
        );
      })}
    </g>
  );
};
