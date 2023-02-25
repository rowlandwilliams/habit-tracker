import { api } from "../../../utils/api";
import { HabitOverviewLinkChartCircles } from "./HabitOverviewLinkChartCircles/HabitOverviewLinkChartCircles";
import { HabitOverviewLinkChartLines } from "./HabitOverviewLinkChartLines/HabitOverviewLinkChartLines";

const nDays = 31;
const graphHeight = 80;
const quarterHeight = graphHeight / 4;
const threeQuarterHeight = graphHeight * 0.75;

interface Props {
  graphWidth: number;
}

export const HabitOverviewLinkChart = ({ graphWidth }: Props) => {
  const dayWidth = graphWidth / nDays;

  const habitQuery = api.habitData.getNDays.useQuery({
    habitId: 1,
    nDays,
  });

  if (!habitQuery.data) return <div>loadin</div>;

  const { data } = habitQuery;
  return (
    <svg width={graphWidth} height={graphHeight} className="rounded-sm">
      <defs>
        <linearGradient id="line-gradient" gradientTransform="rotate(90)">
          <stop offset="5%" stop-color="#14b8a6" />
          <stop offset="95%" stop-color="#f43f5e" />
        </linearGradient>
      </defs>
      <HabitOverviewLinkChartLines
        data={data}
        dayWidth={dayWidth}
        quarterHeight={quarterHeight}
        threeQuarterHeight={threeQuarterHeight}
        nDays={nDays}
      />
      <HabitOverviewLinkChartCircles
        data={data}
        dayWidth={dayWidth}
        graphHeight={graphHeight}
        quarterHeight={quarterHeight}
      />
    </svg>
  );
};
