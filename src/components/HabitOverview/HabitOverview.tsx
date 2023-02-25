import { api } from "../../utils/api";

interface Props {
  habitId: number;
  habitName: string;
}

export const HabitOverview = ({ habitId, habitName }: Props) => {
  const habitQuery = api.habitData.getAll.useQuery();

  console.log(habitQuery);
  return (
    <article>
      {habitName}
      {habitId}
    </article>
  );
};
