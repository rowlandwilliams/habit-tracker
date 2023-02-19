import type { NextPage } from "next";
import type { ReactElement } from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";

const MindfulMoments: NextPage = () => {
  return <div>habits manager</div>;
};

MindfulMoments.getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default MindfulMoments;
