import { type NextPage } from "next";
import type { ReactElement } from "react";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";

const Habit: NextPage = () => {
  return (
    <article className="mx-auto grid max-w-[1000px] grid-cols-4 gap-4 rounded-sm border border-zinc-700  p-4">
      habit
    </article>
  );
};

Habit.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Habit;
