import type { ReactElement } from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";

const Analytics = () => {
  return <div>analyse</div>;
};

Analytics.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Analytics;
