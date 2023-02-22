import type { NextPage } from "next";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";

const Protected: NextPage = () => {
  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  );
};

Protected.getLayout = (page: ReactElement) => <AuthLayout >{page}</AuthLayout>;

export default Protected;
