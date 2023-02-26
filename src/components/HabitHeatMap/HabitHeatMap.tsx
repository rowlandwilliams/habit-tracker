import classNames from "classnames";
import { api } from "../../utils/api";

const nDays = 30;
const nCellsX = 5;
const nCellsY = 6;
const cellDim = 20;
const graphHeight = cellDim * nCellsY;

const xDayHeight = graphHeight / nCellsY;

export const HabitHeatMap = () => {
  let j = 0;

  const habitQuery = api.habitData.getNDays.useQuery({
    habitId: 1,
    nDays,
  });

  if (!habitQuery.data) return <div>looi</div>;

  const { data } = habitQuery;
  return (
    <div className="w-1/2 space-y-2 p-2">
      <h1 className="font-">Last 30 days</h1>
      <svg width={graphHeight} height={graphHeight}>
        {data.map(({ id, completed }, i) => {
          if (i % 5 === 0) {
            j++;
          }

          return (
            <rect
              key={`square-${id}`}
              width={cellDim}
              height={xDayHeight}
              x={cellDim * (i % 5)}
              y={xDayHeight * j - xDayHeight}
              className={classNames(
                "rounded-sm stroke-dark-blue stroke-[6] opacity-75",
                {
                  "fill-teal-500": completed,
                  "fill-rose-500": !completed,
                }
              )}
              rx={4}
            />
          );
        })}
      </svg>
    </div>
  );
};
