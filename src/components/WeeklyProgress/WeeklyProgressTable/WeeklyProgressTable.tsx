import { WeeklyProgressTableDayStatusIcon } from "./WeeklyProgressTableDayStatusIcon/WeeklyProgressTableDayStatusIcon";

interface Props {
  days: string[];
  habits: {
    name: string;
    daysCompleted: number;
    target: number;
  }[];
}

export const WeeklyProgressTable = ({ days, habits }: Props) => {
  return (
    <section className="overflow-hidden rounded-sm">
      <table className="bg-zinc-800 text-left">
        <thead>
          <tr className="divide">
            <th className="p-2">Habit</th>
            {days.map((day) => (
              <th className="w-12 text-center" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map(({ name }) => (
            <>
              <tr className="border-y border-zinc-800">
                <td className="p-2">{name}</td>
                {days.map((day) => (
                  <td key={day} className="px-5">
                    <WeeklyProgressTableDayStatusIcon
                      success={Math.random() < 0.5}
                    />
                  </td>
                ))}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </section>
  );
};
