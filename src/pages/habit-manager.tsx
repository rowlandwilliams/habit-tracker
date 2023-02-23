import type { NextPage } from "next";
import type { ReactElement } from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";

const HabitManager = () => {
  return <div className="bg-mid-blue p-4">Manage </div>;
};

HabitManager.getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default HabitManager;
