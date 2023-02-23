import type { ReactElement } from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";

const Journal = () => {
  return <div>habits manager</div>;
};

Journal.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Journal;
