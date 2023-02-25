import type { ReactElement } from "react";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";
import { HabitOverview } from "../../components/HabitOverview/HabitOverview";

const Habit = () => {
  return <HabitOverview />;
};

Habit.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Habit;
