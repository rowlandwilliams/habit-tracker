import { UiBox } from "../SHARED/UiBox/UiBox";
import { OverviewPieChartsCard } from "./OverviewPieChartsCard/OverviewPieChartsCard";

interface Props {
  habits: { name: string; daysCompleted: number; target: number }[];
}

export const OverviewPieCharts = ({ habits }: Props) => {
  return (
    <UiBox title="Weekly Overview">
      <section className="flex gap-x-4 items-center">
        {habits.map(({ name, daysCompleted, target }, i) => (
          <OverviewPieChartsCard
            habitId={i}
            habitName={name}
            daysCompleted={daysCompleted}
            target={target}
            key={name}
          />
        ))}
      </section>
    </UiBox>
  );
};
