import type { HabitData } from "@prisma/client";

const r = 5;
const inactiveR = r / 2;

interface Props {
  data: HabitData[];
  dayWidth: number;
  graphHeight: number;
  quarterHeight: number;
}

export const HabitOverviewLinkChartCircles = ({
  data,
  dayWidth,
  quarterHeight,
  graphHeight,
}: Props) => {
  const cy = quarterHeight;
  return (
    <g>
      <g>
        {data.map(({ id, completed }, i) => {
          const cx = dayWidth * i + dayWidth / 2;
          const radius = completed ? r : inactiveR;
          const fillClass = completed ? "fill-teal-500" : "fill-inactive";

          return (
            <circle
              cx={cx}
              cy={cy}
              key={`complete-${id}`}
              r={radius}
              className={fillClass}
            />
          );
        })}
      </g>
      <g transform={`translate(0, ${graphHeight / 2})`}>
        {data.map(({ id, completed }, i) => {
          const cx = dayWidth * i + dayWidth / 2;
          const radius = completed ? inactiveR : r;
          const fillClass = completed ? "fill-inactive" : "fill-rose-500";

          return (
            <circle
              cx={cx}
              cy={cy}
              key={`incomplete-${id}`}
              r={radius}
              className={fillClass}
            />
          );
        })}
      </g>
    </g>
  );
};
