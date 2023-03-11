import { useResponsiveGraphDims } from "../../../hooks/useResponsiveGraphDims";
import { getDiagonalLineData } from "./utils";
import { getHabitCoordinates } from "./utils/habitCoordinates";
import { api } from "../../utils/api";
import { curveCardinalClosed, line } from "d3-shape";
import { interpolateCool } from "d3-scale-chromatic";
import { scaleSequential } from "d3-scale";
import { angleToCoord } from "./utils/angleToCoord";
import { RadarChartMoodSelector } from "./RadarChartMoodSelector/RadarChartMoodSelector";

const days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nDays = days.length;
const lineGenerator = line()
  .x((d) => d[0])
  .y((d) => d[1])
  .curve(curveCardinalClosed);
const padding = 120;
const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const minDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

export const RadarChart = () => {
  const { isLoading, isError, data, error } = api.moodData.getAll.useQuery();
  const { ref, graphWidth, graphHeight } = useResponsiveGraphDims();
  const graphDim = Math.min(graphWidth, graphHeight);
  const visDim = graphDim - padding;

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error! ${error.message}</div>;

  const nVertices = data[0]?.moods.length || 12;

  const lineData = getDiagonalLineData(days, nVertices, visDim);

  const pathCoords = getHabitCoordinates({
    moodData: data,
    nVertices,
    nDays,
    graphDim: visDim,
  });

  const dates = data.map((day) => new Date(day.date));

  const colorScale = scaleSequential(interpolateCool).domain([
    minDate(dates),
    maxDate(dates),
  ]);

  const { moods } = data[0] || { moods: [] };

  return (
    <article className="flex w-full flex-col">
      {data[0] && <RadarChartMoodSelector moods={moods} />}
      <section ref={ref} className="w-full flex-grow">
        <svg width={graphDim} height={graphDim} className="mx-auto">
          <defs>
            <linearGradient id="line-gradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="#14b8a6" />
              <stop offset="95%" stopColor="#f43f5e" />
            </linearGradient>{" "}
            <linearGradient id="line-gradient-reverse">
              <stop offset="5%" stopColor="#f43f5e" />
              <stop offset="95%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
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
                domainArray: [0, nDays],
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
      </section>
    </article>
  );
};
