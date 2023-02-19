import { Pie } from "@visx/shape";
import classNames from "classnames";

const radius = 30;
const donutThickness = 10;
const dim = 60;

interface Props {
  progress: number;
  target: number;
}

export const PieChart = ({ progress, target }: Props) => {
  const remainder = 100 - progress;
  const greaterThanProgress = remainder > progress;
  const pieData = progress === 100 ? [progress] : [progress, remainder];
  const onTarget = progress >= target;
  return (
    <svg
      width={dim}
      height={dim}
      className={classNames({
        "-scale-x-100 scale-y-100": greaterThanProgress,
      })}
    >
      <g transform={`translate(${dim / 2}, ${dim / 2})`}>
        <Pie
          width={dim}
          height={dim}
          outerRadius={({ data }, i) => {
            return data === pieData[0] ? radius : radius - 3;
          }}
          innerRadius={({ data }, i) => {
            return data === pieData[0]
              ? radius - donutThickness
              : radius - donutThickness / 2 - 2;
          }}
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
                        "fill-zinc-700": isRemainder,
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
    </svg>
  );
};
