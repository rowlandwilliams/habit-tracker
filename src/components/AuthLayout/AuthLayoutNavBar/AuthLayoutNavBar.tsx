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
    <section className="flex items-center justify-between bg-mid-blue h-14">
      <article className=" flex flex-shrink-0 items-center gap-x-4">
        <Logo />
        <nav className="flex">
          {tabs.map(({ title, href, icon }) => (
            <div
              key={title}
              className={classNames(
                "relative w-44 cursor-pointer py-4 text-sm",
                {
                  "bg-gradient-to-t from-base-blue font-normal":
                    pathname.slice(1) === href,
                  "text-gray-600 hover:text-gray-200":
                    pathname.slice(1) !== href,
                }
              )}
            >
              {pathname.slice(1) === href && (
                <div className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full border border-purple p-0.5 ">
                  <div className="h-1 w-1 rounded-full bg-purple"></div>
                </div>
              )}
              <Link
                href={`/${href}`}
                passHref
                className="flex items-center gap-x-2 px-5"
              >
                {icon}
                {title}
              </Link>
            </div>
          ))}
        </nav>
      </article>
      <section className="flex items-center gap-x-2">
        <button
          className="bg-op0.15] rounded-sm bg-purple p-2 text-white"
          onClick={() => handleSignOut()}
        >
          Sign Out
        </button>
      </section>
    </section>
  );
};
