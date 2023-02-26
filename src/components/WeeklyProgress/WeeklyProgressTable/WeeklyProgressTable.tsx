import Image from "next/image";
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
      <table className="text-left">
        <thead>
          <tr>
            <th className="w-44 p-2 font-medium">Habit</th>
            {days.map((day) => (
              <th className="w-16 text-center font-medium" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map(({ name }) => (
            <>
              <tr>
                <td className="flex gap-x-2 p-2">
                  <Image src="/habit.svg" width={10} height={10} alt="habit" />
                  {name}
                </td>
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
