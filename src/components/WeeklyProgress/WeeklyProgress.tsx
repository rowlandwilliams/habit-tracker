import { WeeklyProgressTable } from "./WeeklyProgressTable/WeeklyProgressTable";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface Props {
  habits: {
    name: string;
    daysCompleted: number;
    target: number;
  }[];
}

export const WeeklyProgress = ({ habits }: Props) => {
  return (
    <article className="max-w-max space-y-4 rounded-sm border border-zinc-800 p-4">
      <header className="border-b border-zinc-800 pb-1 text-sm font-medium">
        Weekly Progress
      </header>
      <WeeklyProgressTable days={days} habits={habits} />
    </article>
  );
};
