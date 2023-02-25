import type { HabitData } from "@prisma/client";
import classNames from "classnames";
import { getLineColor } from "./utils/utils";

interface Props {
  data: HabitData[];
  nDays: number;
  dayWidth: number;
  topCirclesY: number;
  bottomCirclesY: number;
}

export const HabitOverviewLinkChartLines = ({
  data,
  nDays,
  dayWidth,
  topCirclesY,
  bottomCirclesY,
}: Props) => {
  return (
    <g>
      {data.slice(0, nDays - 1).map(({  completed }, i) => {
        const nextDayIsEqual = data[i + 1]?.completed === completed;
        const x1 = dayWidth * i + dayWidth / 2;
        const x2 = x1 + dayWidth;
        const y1 = completed ? topCirclesY : bottomCirclesY;
        const y2 =
          (completed && nextDayIsEqual) || (!completed && !nextDayIsEqual)
            ? topCirclesY
            : bottomCirclesY;
        const lineColor = getLineColor(data, completed, i);

        return (
          <line
            key={`line-${i}`}
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            stroke="url('#line-gradient')"
            className={classNames("stroke-2 opacity-75", lineColor)}
          />
        );
      })}
    </g>
  );
};
