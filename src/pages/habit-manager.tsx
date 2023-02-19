import type { NextPage } from "next";
import type { ReactElement } from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";

const HabitManager: NextPage = () => {
  return <div>habits manager</div>;
};

HabitManager.getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default HabitManager;
