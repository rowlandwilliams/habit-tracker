import { OverviewPieChartsCard } from "./OverviewPieChartsCard/OverviewPieChartsCard";

interface Props {
  habits: {
    name: string;
    daysCompleted: number;
    target: number;
  }[];
}

export const OverviewPieCharts = ({ habits }: Props) => {
  return (
    <article className="space-y-4 rounded-sm bg-dark-blue p-4">
      <header className="text-sm font-medium">
        Currently tracking {habits.length} habits for this week
      </header>
      <section className="xl: mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
        {habits.map(({ name, daysCompleted, target }) => (
          <OverviewPieChartsCard
            name={name}
            daysCompleted={daysCompleted}
            target={target}
            key={name}
          />
        ))}
      </section>
    </article>
  );
};
