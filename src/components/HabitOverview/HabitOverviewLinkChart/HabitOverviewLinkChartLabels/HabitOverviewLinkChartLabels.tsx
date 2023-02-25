import type { HabitData } from "@prisma/client";
import classNames from "classnames";

const days = ["S", "M", "T", "W", "T", "F", "S"];

interface Props {
  data: HabitData[];
  dayWidth: number;
  graphHeight: number;
}

export const HabitOverviewLinkChartLabels = ({
  data,
  dayWidth,
  graphHeight,
}: Props) => {
  return (
    <g>
      {data.map(({ date }, i) => {
        const day = days[date.getDay()];
        const isWeekend = day === "S";
        return (
          <text
            x={dayWidth * i + dayWidth / 2}
            y={graphHeight}
            key={`text-${i}`}
            className={classNames("translate-y-1 text-xs font-normal", {
              "fill-purple": isWeekend,
              "fill-indigo-500": !isWeekend,
            })}
            textAnchor="middle"
          >
            {days[date.getDay()]}
          </text>
        );
      })}
    </g>
  );
};
