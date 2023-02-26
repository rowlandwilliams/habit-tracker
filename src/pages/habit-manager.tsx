import type { ReactElement } from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";
import { DeleteHabitButton } from "../components/DeleteHabitButton/DeleteHabitButton";
import { api } from "../utils/api";

const HabitManager = () => {
  const habitQuery = api.habit.getAll.useQuery();

  if (!habitQuery.data) return <div>Loading</div>;

  const { data } = habitQuery;
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((habit) => (
        <div
          key={habit.name}
          className="flex items-center justify-between rounded-sm border border-inactive p-4"
        >
          {habit.name}
          <DeleteHabitButton habitId={habit.id} />
        </div>
      ))}
    </div>
  );
};

HabitManager.getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default HabitManager;
