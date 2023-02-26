import { api } from "../../../utils/api";
import { HabitOverviewLinkChartCircles } from "./HabitOverviewLinkChartCircles/HabitOverviewLinkChartCircles";
import { HabitOverviewLinkChartDefs } from "./HabitOverviewLinkChartDefs/HabitOverviewLinkChartDefs";
import { HabitOverviewLinkChartLabels } from "./HabitOverviewLinkChartLabels/HabitOverviewLinkChartLabels";
import { HabitOverviewLinkChartLines } from "./HabitOverviewLinkChartLines/HabitOverviewLinkChartLines";

const svgHeight = 100;
const textHeight = 10;
const graphHeight = svgHeight - textHeight;
const topCirclesY = 20;
const bottomCirclesY = graphHeight - topCirclesY;

interface Props {
  graphWidth: number;
  nDays: number;
}

export const HabitOverviewLinkChart = ({ graphWidth, nDays }: Props) => {
  const dayWidth = graphWidth / nDays;

  const habitQuery = api.habitData.getNDays.useQuery({
    habitId: 1,
    nDays,
  });

  if (!habitQuery.data) return <div>loadin</div>;

  const { data } = habitQuery;
  return (
    <svg width={graphWidth} height={svgHeight} className="rounded-sm">
      <HabitOverviewLinkChartDefs />
      <HabitOverviewLinkChartLines
        data={data}
        dayWidth={dayWidth}
        bottomCirclesY={bottomCirclesY}
        topCirclesY={topCirclesY}
        nDays={nDays}
      />
      <HabitOverviewLinkChartCircles
        data={data}
        dayWidth={dayWidth}
        bottomCirclesY={bottomCirclesY}
        topCirclesY={topCirclesY}
      />
      <HabitOverviewLinkChartLabels
        data={data}
        dayWidth={dayWidth}
        graphHeight={graphHeight}
      />
    </svg>
  );
};
