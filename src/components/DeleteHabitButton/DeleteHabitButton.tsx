import { api } from "../../utils/api";

interface Props {
  habitId: number;
}

export const DeleteHabitButton = ({ habitId }: Props) => {
  console.log(habitId, "habit id");
  const deleteHabit = api.habit.deleteHabit.useMutation();

  const handleClick = () => {
    deleteHabit.mutate({ habitId });
  };

  return (
    <button className="rounded-2xl bg-purple px-2 py-0.5" onClick={handleClick}>
      Delete Habit
    </button>
  );
};
