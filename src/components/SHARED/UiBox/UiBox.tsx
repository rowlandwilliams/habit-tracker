import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const UiBox = ({ title, children }: Props) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-base-blue">
      <header className="flex justify-between bg-base-blue p-3">
        <h1>{title}</h1>
      </header>
      <section className="flex flex-grow overflow-scroll p-4">
        {children}
      </section>
    </article>
  );
};
