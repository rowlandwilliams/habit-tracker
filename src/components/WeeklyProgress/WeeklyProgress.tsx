import { WeeklyProgressTable } from "./WeeklyProgressTable/WeeklyProgressTable";
import { WeeklyProgressTableDayStatusIcon } from "./WeeklyProgressTable/WeeklyProgressTableDayStatusIcon/WeeklyProgressTableDayStatusIcon";

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
    <article className="max-w-max space-y-4 rounded-sm bg-dark-blue p-4">
      <header className="flex items-center justify-between ">
        <h1 className="text-sm font-medium">Weekly Progress</h1>
        <section className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <WeeklyProgressTableDayStatusIcon success /> Complete
          </div>
          <div className="flex items-center gap-x-2">
            <WeeklyProgressTableDayStatusIcon success={false} /> Incomplete
          </div>
        </section>
      </header>
      <WeeklyProgressTable days={days} habits={habits} />
    </article>
  );
};
