import type { HabitData } from "@prisma/client";
import classNames from "classnames";

const r = 4;
const inactiveR = r / 2;
const innerCircleR = r / 3;

interface Props {
  data: HabitData[];
  dayWidth: number;
  topCirclesY: number;
  bottomCirclesY: number;
}

export const HabitOverviewLinkChartCircles = ({
  data,
  dayWidth,
  topCirclesY,
  bottomCirclesY,
}: Props) => {
  return (
    <g>
      <g>
        {data.map(({ completed }, i) => {
          const cx = dayWidth * i + dayWidth / 2;
          const radius = completed ? r : inactiveR;
          const strokeColorClass = completed
            ? "stroke-teal-500"
            : "stroke-inactive";
          const fillColorClass = completed ? "fill-teal-500" : "fill-inactive";

          return (
            <>
              <circle
                cx={cx}
                cy={topCirclesY}
                key={`complete-${i}`}
                r={radius}
                className={classNames("fill-dark-blue", strokeColorClass)}
              />
              {completed && (
                <circle
                  cx={cx}
                  cy={topCirclesY}
                  key={`complete-inner-${i}`}
                  r={innerCircleR}
                  className={fillColorClass}
                />
              )}
            </>
          );
        })}
      </g>
      <g>
        {data.map(({ id, completed }, i) => {
          const cx = dayWidth * i + dayWidth / 2;
          const radius = completed ? inactiveR : r;
          const strokeColorClass = completed
            ? "stroke-inactive"
            : "stroke-rose-500";
          const fillColorClass = completed ? "fill-inactive" : "fill-rose-500";

          return (
            <>
              <circle
                cx={cx}
                cy={bottomCirclesY}
                key={`incomplete-${id}`}
                r={radius}
                className={classNames("fill-dark-blue", strokeColorClass)}
              />
              {!completed && (
                <circle
                  cx={cx}
                  cy={bottomCirclesY}
                  key={`incomplete-inner-${id}`}
                  r={innerCircleR}
                  className={fillColorClass}
                />
              )}
            </>
          );
        })}
      </g>
    </g>
  );
};
