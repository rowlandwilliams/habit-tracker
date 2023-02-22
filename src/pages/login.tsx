import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { Logo } from "../components/AuthLayout/Logo/Logo";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const callbackUrl = (router.query?.callbackUrl as string) ?? "/";
  // console.log(callbackUrl);
  const [prev, setPrev] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // router.push("/");
    // console.log(window.location.origin);
    const res = await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}/`,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      prev ? router.push(prev) : router.push("/");
    }

    console.log(res);
  };

  useEffect(() => {
    setPrev(localStorage.getItem("path"));
  }, []);
  // console.log(suh, "prev");
  console.log(prev, "yo");
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="flex max-h-[500px] w-full flex-col items-center space-y-4 rounded-sm bg-mid-blue p-4 text-gray-200 md:w-96">
        <Logo />
        <form
          className="flex w-full flex-col items-center space-y-8"
          onSubmit={(e) => handleSubmit(e)}
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
                type="email"
                required
                id="email-address-icon"
                className="block w-full rounded-lg border border-zinc-700 bg-base-blue p-2.5 pl-10 text-sm  text-white placeholder-gray-400 focus:border-purple focus:ring-purple"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                required
                id="email-address-icon"
                className="block w-full rounded-lg border border-zinc-700 bg-base-blue p-2.5 pl-10 text-sm  text-white placeholder-gray-400 focus:border-purple focus:ring-purple"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
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
        {!!error && <p>{error}</p>}
      </div>
    </section>
  );
};

export default Login;
