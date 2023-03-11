import { scaleSequential } from "d3-scale";
import { interpolateCool } from "d3-scale-chromatic";
import { curveCardinalClosed, line } from "d3-shape";
import React from "react";
import { getDiagonalLineData } from "../utils";
import { angleToCoord } from "../utils/angleToCoord";
import { getHabitCoordinates } from "../utils/habitCoordinates";

const padding = 120;
const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nLevels = levels.length;
const lineGenerator = line()
  .x((d) => d[0])
  .y((d) => d[1])
  .curve(curveCardinalClosed);
const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const minDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));
interface Props {
  graphDim: number;
  nVertices: number;
  data: {
    date: string;
    moods: {
      id: number;
      name: string;
      sentiment: string;
      score: number;
    }[];
  }[];
}

export const RadarChartSvg = ({ graphDim, nVertices, data }: Props) => {
  const visDim = graphDim - padding;

  const lineData = getDiagonalLineData(levels, nVertices, visDim);

  const pathCoords = getHabitCoordinates({
    moodData: data,
    nVertices,
    nLevels,
    graphDim: visDim,
  });

  const dates = data.map((day) => new Date(day.date));

  const colorScale = scaleSequential(interpolateCool).domain([
    minDate(dates),
    maxDate(dates),
  ]);

  return (
    <svg width={graphDim} height={graphDim} className="mx-auto">
      <g transform={`translate(${padding / 2}, ${padding / 2})`}>
        {lineData.map(({ day, diagonalCoords }) => (
          <g key={`${day}-${diagonalCoords[0]?.x1}-group`}>
            <g>
              {diagonalCoords.map(({ x1, x2, y1, y2 }, i) => (
                <line
                  x1={x1}
                  x2={x2}
                  y1={y1}
                  y2={y2}
                  key={`${day}-${x1}-${x2}-${y1}-${y2}-line-${i}`}
                  className="stroke-inactive"
                ></line>
              ))}
            </g>
          </g>
        ))}
        {pathCoords.map((day) => {
          const col = colorScale(day.date);
          console.log(col);
          return (
            <path
              key={day.date}
              d={lineGenerator(day.moods.map((mood) => mood.coords))}
              fillOpacity={0.1}
              fill={col}
              stroke={col}
            />
          );
        })}
        {data[0]?.moods.map(({ name }, i) => {
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

          const textAnchor =
            i === 0 ? "middle" : isFirstXHalf ? "end" : "start";
          console.log(isFirstXHalf, i, name);
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
    </svg>
  );
};
