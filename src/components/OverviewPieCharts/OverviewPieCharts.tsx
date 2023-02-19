import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { PieChart } from "./PieChart/PieChart";

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
          <Link
            href={`/habit/${name.toLowerCase()}`}
            key={name}
            className="space-y-4 rounded-sm border border-transparent bg-zinc-800 p-4 hover:border-zinc-700"
          >
            <div className="flex justify-between">
              <PieChart
                progress={(daysCompleted / 7) * 100}
                target={(target / 7) * 100}
              />
              <section className="flex flex-col items-end space-y-2">
                <h1 className="flex items-center gap-x-2 text-sm font-medium">
                  <Image src="/habit.svg" width={16} height={16} alt="habit" />
                  {name}
                </h1>
                <p
                  className={classNames(
                    "w-24 max-w-max rounded-2xl border px-2 text-center font-medium",
                    {
                      "border-teal-500 text-teal-500": daysCompleted >= target,
                      "border-rose-500 text-rose-500": daysCompleted < target,
                    }
                  )}
                >
                  {daysCompleted >= target ? "COMPLETED" : "INCOMPLETE"}
                </p>
              </section>
            </div>
            <div className="flex justify-between">
              <p className="space-y-1">
                <h1 className="font-normal">Target</h1>
                <div>
                  <span
                    className={classNames("font-semibold", {
                      "text-teal-500": daysCompleted >= target,
                      "text-rose-500": daysCompleted < target,
                    })}
                  >
                    {target}
                  </span>{" "}
                  out of 7
                </div>
              </p>
              <p className="space-y-1">
                <h1 className="font-normal">Progress</h1>
                <div>
                  <span
                    className={classNames("font-semibold", {
                      "text-teal-500": daysCompleted >= target,
                      "text-rose-500": daysCompleted < target,
                    })}
                  >
                    {daysCompleted}
                  </span>{" "}
                  out of 7
                </div>
              </p>
            </div>
          </Link>
        ))}
      </section>
    </article>
  );
};
