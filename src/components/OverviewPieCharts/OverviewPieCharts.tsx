import { OverviewPieChartsCard } from "./OverviewPieChartsCard/OverviewPieChartsCard";

const habits = [
  { name: "Meditate", daysCompleted: 1, target: 5 },
  { name: "Go for a run", daysCompleted: 6, target: 3 },
  { name: "Drawing", daysCompleted: 3, target: 7 },
  { name: "Connect with friends", daysCompleted: 2, target: 1 },
  { name: "Make bed", daysCompleted: 5, target: 2 },
  { name: "Plan life", daysCompleted: 1, target: 3 },
  { name: "Code", daysCompleted: 7, target: 4 },
  { name: "Eat Healthy", daysCompleted: 7, target: 4 },
];

export const OverviewPieCharts = () => {
  return (
    <article className="space-y-4 rounded-sm border border-zinc-800 p-4">
      <header className="border-b border-zinc-800 pb-1 text-sm font-medium">
        Currently tracking {habits.length} habits for this week
      </header>
      <section className="mx-auto grid grid-cols-5 gap-4">
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
