import type { GetServerSidePropsContext } from "next";
import type { ReactElement } from "react";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";

interface Props {
  habitName: string;
}

const Habit = ({ habitName }: Props) => {
  return (
    <article className="mx-auto grid max-w-[1000px] grid-cols-4 gap-4 rounded-sm border border-zinc-700  p-4">
      {habitName}
    </article>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { habitName } = context.query;

  return { props: { habitName } };
};

Habit.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Habit;
