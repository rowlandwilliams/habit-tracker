import { scaleSequential } from "d3-scale";
import { interpolateCool, interpolatePlasma } from "d3-scale-chromatic";
import { curveLinearClosed, line } from "d3-shape";

const lineGenerator = line()
  .x((d) => d[0])
  .y((d) => d[1])
  .curve(curveLinearClosed);

interface Props {
  pathCoords: {
    date: string;
    moods: {
      coords: [number, number];
      id: number;
      name: string;
      sentiment: string;
      score: number;
    }[];
  }[];
  minDate: Date;
  maxDate: Date;
}

export const RadarChartSvgPaths = ({ pathCoords, minDate, maxDate }: Props) => {
  const colorScale = scaleSequential(interpolatePlasma).domain([
    minDate,
    maxDate,
  ]);
  return (
    <g>
      {pathCoords.map((day) => {
        const col = colorScale(new Date(day.date));
        const coords = day.moods.map((mood) => mood.coords);
        const d = lineGenerator(coords);
        return (
          d && (
            <path
              key={day.date}
              d={d}
              fillOpacity={0.1}
              fill={col}
              stroke={col}
            />
          )
        );
      })}
    </g>
  );
};
