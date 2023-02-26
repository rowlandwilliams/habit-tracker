import { Roboto } from "@next/font/google";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { usePreviousRoute } from "../../../hooks/usePreviousRoute";
import { ClientOnly } from "../ClientOnly";
import { AuthLayoutNavBar } from "./AuthLayoutNavBar/AuthLayoutNavBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  const { status } = useSession();
  const { pathname, asPath, push } = useRouter();
  const previousRoute = usePreviousRoute();

  if (status === "loading") {
    return <div />;
  }

  if (status === "unauthenticated") {
    // on handleSignOut, previousRoute is removed from localStorage
    // prevent previousRoute being reset in localStorage while temporarily unauthenticated during logout render cycle
    previousRoute && localStorage.setItem("previousRoute", asPath);
    void push("/login");
    return null;
  }

  return (
    <ClientOnly>
      <main
        className={`flex flex-col h-screen bg-dark-blue text-sm text-zinc-300 ${roboto.className}`}
      >
        <AuthLayoutNavBar pathname={pathname} />
        <article className="flex-grow overflow-y-hidden p-6">
          {children}
        </article>
      </main>
    </ClientOnly>
  );
};
