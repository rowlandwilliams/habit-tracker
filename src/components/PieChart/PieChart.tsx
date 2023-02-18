import { Pie } from "@visx/shape";
import classNames from "classnames";

const radius = 30;
const donutThickness = 10;
const dim = 60;

interface Props {
  progress: number;
}

export const PieChart = ({ progress }: Props) => {
  const remainder = 100 - progress;
  const data = [progress, remainder];
  return (
    <svg
      width={dim}
      height={dim}
      transform={remainder > progress ? "scale(-1,1)" : undefined}
    >
      <g transform={`translate(${dim / 2}, ${dim / 2})`}>
        <Pie
          width={dim}
          height={dim}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          data={data}
          pieValue={(d) => d}
          fill={"green"}
        >
          {({ arcs, path }) => (
            <g>
              {arcs.map((arc, i) => {
                const isRemainder = i >0;
                return (
                  <g key={`pie-arc-${i}`}>
                    <path
                      className={classNames("", {
                        "fill-pink-600": !isRemainder,
                        "fill-indigo-700": isRemainder,
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
