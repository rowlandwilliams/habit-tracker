import { useResponsiveGraphWidth } from "../../../hooks/useResponsiveGraphWidth";
import { HabitOverviewLinkChart } from "./HabitOverviewLinkChart/HabitOverviewLinkChart";

export const HabitOverview = () => {
  const { ref, graphWidth } = useResponsiveGraphWidth();
  return (
    <article ref={ref} className="space-y-2">
      <h1>Monthly Breakdown</h1>
      <HabitOverviewLinkChart graphWidth={graphWidth} />
    </article>
  );
};
