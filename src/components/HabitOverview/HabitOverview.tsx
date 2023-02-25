import type { HabitData } from "@prisma/client";
import classNames from "classnames";
import { useResponsiveGraphWidth } from "../../../hooks/useResponsiveGraphWidth";
import { api } from "../../utils/api";

interface Props {
  habitId: number;
  habitName: string;
}

const nDays = 31;
const height = 80;
const r = 5;
const inactiveR = r / 2;

const getLineColor = (data: HabitData[], completed: boolean, i: number) => {
  switch (true) {
    case data[i + 1]?.completed !== completed:
      return;
    case completed:
      return "stroke-teal-500";
    default:
      return "stroke-rose-500";
  }
};

export const HabitOverview = ({ habitId, habitName }: Props) => {
  const { ref, graphWidth } = useResponsiveGraphWidth();
  const habitQuery = api.habitData.getNDays.useQuery({
    habitId: 1,
    nDays,
  });

  const dayWidth = graphWidth / nDays;

  if (!habitQuery.data) return <div>loadin</div>;

  const { data } = habitQuery;
  return (
    <article ref={ref} className="space-y-2">
      <h1>Monthly Breakdown</h1>
      <svg width={graphWidth} height={height} className="rounded-sm">
        <defs>
          <linearGradient id="line-gradient" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="#14b8a6" />
            <stop offset="95%" stop-color="#f43f5e" />
          </linearGradient>
        </defs>
        {data.slice(0, nDays - 1).map(({ id, completed }, i) => (
          <line
            key={`line-${id}`}
            x1={dayWidth * i + dayWidth / 2}
            x2={dayWidth * i + dayWidth / 2 + dayWidth}
            y1={completed ? height / 4 : height * 0.75}
            y2={
              (!completed && data[i + 1]?.completed !== completed) ||
              (completed && data[i + 1]?.completed === completed)
                ? height / 4
                : height * 0.75
            }
            stroke="url('#line-gradient')"
            className={classNames("stroke-2", getLineColor(data, completed, i))}
          />
        ))}
        {data.map(({ id, completed }, i) => (
          <circle
            cx={dayWidth * i + dayWidth / 2}
            cy={height / 4}
            key={`complete-${id}`}
            r={completed ? r : inactiveR}
            className={completed ? "fill-teal-500" : "fill-inactive"}
          />
        ))}
        <g transform={`translate(0, ${height / 2})`}>
          {data.map(({ id, completed }, i) => (
            <circle
              cx={dayWidth * i + dayWidth / 2}
              cy={height / 4}
              key={`incomplete-${id}`}
              r={completed ? inactiveR : r}
              className={completed ? "fill-inactive" : "fill-rose-500"}
            />
          ))}
        </g>
      </svg>
    </article>
  );
};
