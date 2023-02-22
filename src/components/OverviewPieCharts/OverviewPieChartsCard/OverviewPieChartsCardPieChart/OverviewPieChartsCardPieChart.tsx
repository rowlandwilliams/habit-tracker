import { Pie } from "@visx/shape";
import classNames from "classnames";

const dim = 150;
const radius = dim / 2;
const donutThickness = 5;
const innerPadding = 6;

interface Props {
  progressPc: number;
  targetPc: number;
}

export const OverviewPieChartsCardPieChart = ({
  progressPc,
  targetPc,
}: Props) => {
  const progressRemainder = 100 - progressPc;
  const greaterThanProgress = progressRemainder > progressPc;
  const pieData =
    progressPc === 100 ? [progressPc] : [progressPc, progressRemainder];

  const targetRemainder = 100 - targetPc;
  const greaterThanTarget = targetRemainder > targetPc;
  const targetData = targetPc === 100 ? [targetPc] : [targetPc, 100 - targetPc];

  const onTarget = progressPc >= targetPc;
  return (
    <div className="flex justify-center">
      <svg width={dim} height={dim}>
        <g transform={`translate(${dim / 2}, ${dim / 2})`}>
          <g
            className={classNames({
              "-scale-x-100 scale-y-100": greaterThanProgress,
            })}
          >
            <Pie
              width={dim}
              height={dim}
              outerRadius={radius}
              innerRadius={radius - donutThickness}
              data={pieData}
              pieValue={(d) => d}
              cornerRadius={1}
              padAngle={0.05}
            >
              {({ arcs, path }) => (
                <g>
                  {arcs.map((arc, i) => {
                    const isRemainder = i > 0;
                    return (
                      <g key={`pie-arc-${i}`}>
                        <path
                          className={classNames("", {
                            "fill-[#262E4F]": isRemainder,
                            "fill-rose-500": !isRemainder && !onTarget,
                            "fill-teal-500": !isRemainder && onTarget,
                          })}
                          d={path(arc) as string}
                        />
                      </g>
                    );
                  })}
                </g>
              )}
            </Pie>
          </g>

          <g
            className={classNames({
              "-scale-x-100 scale-y-100": greaterThanTarget,
            })}
          >
            <Pie
              width={dim}
              height={dim}
              outerRadius={radius - donutThickness - innerPadding}
              innerRadius={radius - donutThickness * 2 - innerPadding}
              data={targetData}
              pieValue={(d) => d}
              cornerRadius={1}
              padAngle={0.05}
            >
              {({ arcs, path }) => (
                <g>
                  {arcs.map((arc, i) => {
                    const isRemainder = i > 0;
                    return (
                      <g key={`pie-arc-${i}`}>
                        <path
                          className={classNames("", {
                            "fill-[#262E4F]": isRemainder,
                            "fill-purple": !isRemainder,
                          })}
                          d={path(arc) as string}
                        />
                      </g>
                    );
                  })}
                </g>
              )}
            </Pie>
          </g>
        </g>
      </svg>
    </div>
  );
};
