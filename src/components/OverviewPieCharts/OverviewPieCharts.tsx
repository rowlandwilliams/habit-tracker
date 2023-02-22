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
    <article className="space-y-4 rounded-sm bg-mid-blue p-4">
      <header className="flex items-center justify-between ">
        <h1 className="text-sm font-medium">Weekly Progress</h1>
        <section className="flex gap-x-2">
          <button className="flex items-center gap-x-2 rounded-2xl bg-purple px-4 py-0.5 font-medium text-white">
            <span>+</span> Add Habit
          </button>
          <button className="flex items-center gap-x-2 rounded-2xl bg-yellow-500 px-4 bg-opacity-[0.15] py-0.5 font-medium text-yellow-500">
            <span>-</span> Delete Habit
          </button>
        </section>
      </header>
      <section className="xl: 3xl:grid-cols-5 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
