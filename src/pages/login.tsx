import { type NextPage } from "next";
import { Router, useRouter } from "next/router";
import { Logo } from "../components/AuthLayout/Logo/Logo";

const Login: NextPage = () => {
  const router = useRouter();

  const handleSubmit = async () => {
    await Router.push({
      pathname: "/about",
      query: { name: "Someone" },
    });
  };
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="flex max-h-[500px] w-full flex-col items-center space-y-4 rounded-sm bg-mid-blue p-4 text-gray-200 md:w-96">
        <Logo />
        <form
          className="flex w-full flex-col items-center space-y-8"
          onSubmit={handleSubmit}
        >
          <section className="w-full space-y-2">
            <label
              htmlFor="email-address-icon"
              className="font-mediumtext-white mb-2 block text-sm"
            >
              Email
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="block w-full rounded-lg border border-zinc-700 bg-base-blue p-2.5 pl-10 text-sm  text-white placeholder-gray-400 focus:border-purple focus:ring-purple"
                placeholder="Email"
              />
            </div>
            <label
              htmlFor="email-address-icon"
              className="font-mediumtext-white mb-2 block text-sm"
            >
              Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="block w-full rounded-lg border border-zinc-700 bg-base-blue p-2.5 pl-10 text-sm  text-white placeholder-gray-400 focus:border-purple focus:ring-purple"
                placeholder="Password"
              />
            </div>
          </section>
          <button
            type="submit"
            className="rounded-sm bg-purple bg-opacity-[0.15] px-4 py-2 font-medium text-purple text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
