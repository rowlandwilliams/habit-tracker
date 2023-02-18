import { Pie } from "@visx/shape";

const radius = 30;
const donutThickness = 10;
const dim = 60;

interface Props {
  progress: number;
}

export const PieChart = ({ progress }: Props) => {
  const data = [progress, 100 - progress].sort();
  return (
    <svg width={dim} height={dim}>
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
              {arcs.map((arc, i) => (
                <g key={`pie-arc-${i}`}>
                  <path
                    className={`arc${i}`}
                    d={path(arc) as string}
                    fill={i > 0 ? "#be185d" : "#9ca3af"}
                  />
                </g>
              ))}
            </g>
          )}
        </Pie>
      </g>
    </svg>
  );
};
