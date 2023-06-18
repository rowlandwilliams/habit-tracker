import { api } from "../../utils/api";
import { UiBox } from "../SHARED/UiBox/UiBox";
import { OverviewPieChartsCard } from "./OverviewPieChartsCard/OverviewPieChartsCard";

interface Props {
  habits: { name: string; daysCompleted: number; target: number }[];
}

export const OverviewPieCharts = ({ habits }: Props) => {
  const { isLoading, data } = api.habit.getAll.useQuery();

  if (isLoading) return <div>k</div>;

  return (
    <UiBox title="Weekly Overview">
      <section className="flex items-center gap-x-4">
        {data.map(({ name, daysCompleted, target }, i) => (
          <OverviewPieChartsCard
            habitId={i + 1}
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
