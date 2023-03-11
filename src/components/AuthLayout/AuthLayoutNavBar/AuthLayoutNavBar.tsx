import classNames from "classnames";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Logo } from "./Logo/Logo";
import { AnalyticsIcon } from "./TabIcons/AnalyticsIcon";
import { JournalIcon } from "./TabIcons/JournalIcon";
import { OverviewIcon } from "./TabIcons/OverviewIcon";

const tabs = [
  { title: "Overview", href: "", icon: <OverviewIcon /> },
  { title: "Habit Manager", href: "habit-manager", icon: <AnalyticsIcon /> },
  { title: "Analytics", href: "analytics", icon: <AnalyticsIcon /> },
  { title: "Journal", href: "journal", icon: <JournalIcon /> },
];

interface Props {
  pathname: string;
}

export const AuthLayoutNavBar = ({ pathname }: Props) => {
  const handleSignOut = () => {
    localStorage.removeItem("previousRoute");
    void signOut();
  };
  return (
    <section className="flex h-14 items-center justify-between pr-4">
      <article className=" flex flex-shrink-0 items-center ">
        <Logo />
        <nav className="flex">
          {tabs.map(({ title, href, icon }) => (
            <div
              key={title}
              className={classNames("relative cursor-pointer py-4 text-sm", {
                "text-gray-600 hover:text-gray-200": pathname.slice(1) !== href,
              })}
            >
              <Link
                href={`/${href}`}
                passHref
                className="flex items-center gap-x-2 px-5"
              >
                {icon}
              </Link>
            </div>
          ))}
        </nav>
      </article>
      <section className="flex items-center gap-x-2">
        <button className="w-4  bg-gradient-to-t rounded-sm from-blue-600 to-fuchsia-500 h-4" onClick={() => handleSignOut()}></button>
      </section>
    </section>
  );
};
