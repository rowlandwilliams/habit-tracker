import classNames from "classnames";
import { useState } from "react";
import { useResponsiveGraphWidth } from "../../../hooks/useResponsiveGraphWidth";
import { HabitOverviewLinkChart } from "./HabitOverviewLinkChart/HabitOverviewLinkChart";

const timeOptions = [
  { label: "1W", nDays: 7 },
  { label: "2W", nDays: 14 },
  { label: "1M", nDays: 30 },
  { label: "2M", nDays: 60 },
];

export const HabitOverview = () => {
  const { ref, graphWidth } = useResponsiveGraphWidth();
  const [activeNDays, setActiveNDays] = useState(60);
  const handleTimeOptionClick = (nDays: number) => setActiveNDays(nDays);

  return (
    <article ref={ref}>
      <section className="flex items-center justify-between">
        <h1>Monthly Breakdown</h1>
        <div className="space-x-1">
          {timeOptions.map(({ label, nDays }) => (
            <button
              onClick={() => handleTimeOptionClick(nDays)}
              key={label}
              className={classNames(
                "rounded-sm bg-opacity-20 p-1 text-xs font-medium",
                {
                  "bg-indigo-500 text-indigo-500": nDays === activeNDays,
                  "bg-gray-600 text-gray-600 hover:text-purple":
                    nDays !== activeNDays,
                }
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
      <HabitOverviewLinkChart graphWidth={graphWidth} nDays={activeNDays} />
    </article>
  );
};
