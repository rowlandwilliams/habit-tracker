import { useState } from "react";
import { useResponsiveGraphWidth } from "../../../hooks/useResponsiveGraphWidth";
import { HabitOverviewLinkChart } from "./HabitOverviewLinkChart/HabitOverviewLinkChart";
import { HabitOverviewTimePeriodSelectors } from "./HabitOverviewTimePeriodSelectors/HabitOverviewTimePeriodSelectors";

export const HabitOverview = () => {
  const { ref, graphWidth } = useResponsiveGraphWidth();
  const [activeNDays, setActiveNDays] = useState(60);
  const handleTimeOptionClick = (nDays: number) => setActiveNDays(nDays);

  return (
    <article ref={ref}>
      <section className="flex items-center justify-between">
        <h1>Monthly Breakdown</h1>
        <HabitOverviewTimePeriodSelectors
          activeNDays={activeNDays}
          handleTimeOptionClick={handleTimeOptionClick}
        />
      </section>
      <HabitOverviewLinkChart graphWidth={graphWidth} nDays={activeNDays} />
    </article>
  );
};
