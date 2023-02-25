import type { HabitData } from "@prisma/client";
import classNames from "classnames";
import { getLineColor } from "./utils/utils";

interface Props {
  data: HabitData[];
  nDays: number;
  dayWidth: number;
  quarterHeight: number;
  threeQuarterHeight: number;
}

export const HabitOverviewLinkChartLines = ({
  data,
  nDays,
  dayWidth,
  quarterHeight,
  threeQuarterHeight,
}: Props) => {
  return (
    <g>
      {data.slice(0, nDays - 1).map(({ id, completed }, i) => {
        const nextDayIsEqual = data[i + 1]?.completed === completed;
        const x1 = dayWidth * i + dayWidth / 2;
        const x2 = x1 + dayWidth;
        const y1 = completed ? quarterHeight : threeQuarterHeight;
        const y2 =
          (completed && nextDayIsEqual) || (!completed && !nextDayIsEqual)
            ? quarterHeight
            : threeQuarterHeight;
        const lineColor = getLineColor(data, completed, i);

        return (
          <line
            key={`line-${id}`}
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            stroke="url('#line-gradient')"
            className={classNames("stroke-2", lineColor)}
          />
        );
      })}
    </g>
  );
};
