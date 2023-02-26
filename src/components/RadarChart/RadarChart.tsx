import { curveCatmullRomClosed, line } from "d3-shape";
import { useResponsiveGraphDims } from "../../../hooks/useResponsiveGraphDims";
import { UiBox } from "../SHARED/UiBox/UiBox";
import { getLevelCoords } from "./SpiderChart/helpers/GridLines/getLevelCoords";
import { levelCoordsToDiagonal } from "./SpiderChart/helpers/GridLines/levelCoordsToDiagonal";
import { angleToCoord } from "./SpiderChart/helpers/common/angleToCoord";

const days = [0, 1, 2, 3, 4, 5, 6, 7];
const lineGenerator = line()
  .x((d) => d[0])
  .y((d) => d[1])
  .curve(curveCatmullRomClosed);

interface Props {
  habits: { name: string; daysCompleted: number; target: number }[];
}

export const RadarChart = ({ habits }: Props) => {
  const { ref, graphWidth, graphHeight } = useResponsiveGraphDims();
  const graphDim = Math.min(graphWidth, graphHeight);
  const nVertices = habits.length;

  const lineData = days.map((day, i) => {
    const levelCoords = getLevelCoords({
      nVertices,
      level: day,
      width: graphDim,
      domainArray: [0, days.length],
      rangeArray: [0, graphDim / 2],
    });

    const diagonalCoords = levelCoordsToDiagonal(levelCoords);

    return diagonalCoords;
  });

  const pointCoordinates = {
    completedCoordinates: habits.map(({ daysCompleted }, i) => {
      const angle = Math.PI / 2 + (2 * Math.PI * i) / nVertices;
      const coords = angleToCoord({
        angle,
        value: daysCompleted,
        width: graphDim,
        domainArray: [0, days.length],
        rangeArray: [0, graphDim / 2],
      });

      return { value: daysCompleted, coords };
    }),
    targetCoordinates: habits.map(({ target }, i) => {
      const angle = Math.PI / 2 + (2 * Math.PI * i) / nVertices;
      const coords = angleToCoord({
        angle,
        value: target,
        width: graphDim,
        domainArray: [0, days.length],
        rangeArray: [0, graphDim / 2],
      });

      return { value: target, coords };
    }),
  };

  const { completedCoordinates, targetCoordinates } = pointCoordinates;
  const outerCoords = lineData.slice(-1);

  return (
    <UiBox title="Your Mpood">
      <article className="flex w-full flex-col ">
        <header className="space-y-2 text-xs font-medium ">
          <h1>8 of 8 habits selected</h1>
          <section className="flex flex-wrap gap-2">
            {habits.map(({ name }) => (
              <button className="space-x-2 whitespace-nowrap rounded-2xl border border-amber-600 px-3 py-0.5 text-amber-600">
                <span>{name}</span>
                <span>+</span>
              </button>
            ))}
          </section>
        </header>
        <section ref={ref} className="w-full flex-grow">
          <svg width={graphDim} height={graphDim} className="mx-auto">
            {lineData.map((diagonalCoords) => (
              <g key={diagonalCoords[0]?.x1}>
                <g>
                  {diagonalCoords.map(({ x1, x2, y1, y2 }) => (
                    <line
                      x1={x1}
                      x2={x2}
                      y1={y1}
                      y2={y2}
                      key={y2}
                      className="stroke-inactive"
                    ></line>
                  ))}
                </g>
              </g>
            ))}
            <path
              d={lineGenerator(targetCoordinates.map(({ coords }) => coords))}
              className="fill-purple stroke-purple"
              fillOpacity={0.1}
            ></path>
            <path
              d={lineGenerator(
                completedCoordinates.map(({ coords }) => coords)
              )}
              className="fill-transparent stroke-teal-500"
              fillOpacity={0.2}
            ></path>

            {completedCoordinates.map(({ value, coords }, i) => (
              <circle
                cx={coords[0]}
                cy={coords[1]}
                r={3}
                className={
                  value > targetCoordinates[i]?.value
                    ? "fill-teal-500"
                    : "fill-rose-500"
                }
              ></circle>
            ))}
            {targetCoordinates.map(({ coords }) => (
              <circle
                cx={coords[0]}
                cy={coords[1]}
                r={2}
                className="fill-purple"
              ></circle>
            ))}
            {/* {outerCoords.map((coord, i) => (
              <text x={coord[0]} y={graphDim / 2} className="fill-purple">
                s;uuu
              </text>
            ))} */}
          </svg>
        </section>
      </article>
    </UiBox>
  );
};
