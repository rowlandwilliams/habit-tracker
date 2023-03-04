import classNames from "classnames";
import { curveCatmullRomClosed, line } from "d3-shape";
import { useResponsiveGraphDims } from "../../../hooks/useResponsiveGraphDims";
import { UiBox } from "../SHARED/UiBox/UiBox";
import { getDiagonalLineData } from "./utils";
import { getHabitCoordinates } from "./utils/habitCoordinates";

const days = [0, 1, 2, 3, 4, 5, 6, 7];
const nDays = days.length;
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
  const half = graphDim / 2;
  const nVertices = habits.length;

  const lineData = getDiagonalLineData(days, nVertices, graphDim);

  const pointCoordinates = {
    completedCoordinates: getHabitCoordinates({
      habits,
      graphDim,
      isTarget: false,
      nVertices,
      nDays,
    }),
    targetCoordinates: getHabitCoordinates({
      habits,
      graphDim,
      isTarget: true,
      nVertices,
      nDays,
    }),
  };

  const { completedCoordinates, targetCoordinates } = pointCoordinates;

  const completedLoop = lineGenerator(
    completedCoordinates.map(({ coords }) => coords)
  );

  const sections = completedLoop?.split("C");

  const suh = sections.map(
    (section, i) =>
      `M${
        i < sections.length - 1
          ? completedCoordinates[i]?.coords.join(",")
          : completedCoordinates[0].coords.join(",")
      }C${section}`
  );

  return (
    <UiBox title="Your Mpood">
      <article className="flex w-full flex-col ">
        <header className="space-y-2 text-xs font-medium ">
          <h1>8 of 8 habits selected</h1>
          <section className="flex flex-wrap gap-2">
            {habits.map(({ name }) => (
              <button
                key={name}
                className="space-x-2 whitespace-nowrap rounded-2xl border border-amber-600 px-3 py-0.5 text-amber-600"
              >
                <span>{name}</span>
                <span>+</span>
              </button>
            ))}
          </section>
        </header>
        <section ref={ref} className="w-full flex-grow">
          <svg width={graphDim} height={graphDim} className="mx-auto">
            <defs>
              <linearGradient id="line-gradient" gradientTransform="rotate(90)">
                <stop offset="5%" stopColor="#14b8a6" />
                <stop offset="95%" stopColor="#f43f5e" />
              </linearGradient>{" "}
              <linearGradient
                id="line-gradient-reverse"
                gradientTransform="rotate(90)"
              >
                <stop offset="5%" stopColor="#f43f5e" />
                <stop offset="95%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>{" "}
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
            {/* <path
              d={lineGenerator(targetCoordinates.map(({ coords }) => coords))}
              className="fill-purple stroke-purple"
              fillOpacity={0.1}
            ></path> */}
            <path
              d={completedLoop}
              className="fill-purple stroke-purple"
              fillOpacity={0.1}
            ></path>
            {suh?.map((path) => (
              <path
                d={path}
                className={classNames(
                  "fill-transparent"
                  // Math.random() > 0.5 ? "stroke-red-500" : "stroke-yellow-500"
                )}
                fillOpacity={0.2}
                stroke="url('#line-gradient-reverse')"
              ></path>
            ))}
            {completedCoordinates.map(({ habit, value, coords }, i) => (
              <circle
                key={`${habit}-daysCompleted`}
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
            {targetCoordinates.map(({ habit, coords }) => (
              <circle
                key={`${habit}-target`}
                cx={coords[0]}
                cy={coords[1]}
                r={2}
                className="fill-purple"
              ></circle>
            ))}
          </svg>
        </section>
      </article>
    </UiBox>
  );
};
