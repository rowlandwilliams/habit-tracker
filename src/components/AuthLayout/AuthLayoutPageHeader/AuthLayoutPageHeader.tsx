import { signOut } from "next-auth/react";
import Image from "next/image";
import type { ReactNode } from "react";
import { Chevron } from "./Chevron/Chevron";

interface Props {
  children: ReactNode;
}

export const AuthLayoutPageHeader = ({ children }: Props) => {
  const handleSignOut = () => {
    localStorage.removeItem("previousRoute");
    void signOut();
  };
  return (
    <article className="flex-grow space-y-4 px-4 py-3 ">
      <section className="flex items-center justify-between border-b border-zinc-800 pb-2 font-medium">
        <h1 className="text-base">Overview</h1>
        <section className="flex items-center gap-x-2">
          <button
            className="bg-op0.15] rounded-sm bg-purple p-2 text-white"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </button>
          <div className="mr-2 rounded-sm bg-yellow-500 bg-opacity-[0.15] p-2 text-yellow-500">
            12 trial days remaining
          </div>
          <div className="flex items-center gap-x-2 border-l border-zinc-800 pl-4">
            <Image
              src="/avatar.jpeg"
              width={30}
              alt="avatar"
              height={30}
              className="rounded-full"
            />
            <p>Rowland Williams</p>
            <Chevron visible={false} />
          </div>
        </section>
      </section>
      {children}
    </article>
  );
};
