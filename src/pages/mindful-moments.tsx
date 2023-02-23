import type { ReactElement } from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";

const MindfulMoments = () => {
  return <div>habits manager</div>;
};

MindfulMoments.getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
);

export default MindfulMoments;
