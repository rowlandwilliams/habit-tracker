import type { ReactElement } from "react";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";
import { HabitHeatMap } from "../../components/HabitHeatMap/HabitHeatMap";
import { HabitOverview } from "../../components/HabitOverview/HabitOverview";

const Habit = () => {
  return (
    <section className="space-y-8">
      <HabitOverview />
      <div>
        <HabitHeatMap />
      </div>
    </section>
  );
};

Habit.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Habit;
