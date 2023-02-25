import type { GetServerSidePropsContext } from "next";
import type { ReactElement } from "react";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";
import { HabitOverview } from "../../components/HabitOverview/HabitOverview";

interface Props {
  habitId: number;
  habitName: string;
}

const Habit = ({ habitId, habitName }: Props) => {
  return <HabitOverview habitId={habitId} habitName={habitName} />;
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { habitId, habitName } = context.query;
  console.log(context.query);
  return { props: { habitId: habitId || null, habitName: habitName || null } };
};

Habit.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Habit;
