import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <main className="h-screen bg-zinc-900 p-8 text-xs text-gray-200">
      {children}
    </main>
  );
};
