import { Poppins, Montserrat } from "@next/font/google";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { ClientOnly } from "../ClientOnly";
import { Chevron } from "./Chevron";
import { Logo } from "./Logo/Logo";
import { AnalyticsIcon } from "./TabIcons/AnalyticsIcon";
import { JournalIcon } from "./TabIcons/JournalIcon";
import { MindfulMomentIcon } from "./TabIcons/MindfulMomentIcon";
import { OverviewIcon } from "./TabIcons/OverviewIcon";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const tabs = [
  { title: "Overview", href: "", icon: <OverviewIcon /> },
  { title: "Habit Manager", href: "habit-manager", icon: <AnalyticsIcon /> },
  { title: "Analytics", href: "analytics", icon: <AnalyticsIcon /> },
  { title: "Journal", href: "journal", icon: <JournalIcon /> },
  {
    title: "Mindful Moments",
    href: "mindful-moments",
    icon: <MindfulMomentIcon />,
  },
  {
    title: "News Feed",
    href: "news-feed",
    icon: <MindfulMomentIcon />,
  },
  {
    title: "Community",
    href: "news-feed",
    icon: <MindfulMomentIcon />,
  },
  {
    title: "Achievements",
    href: "news-feed",
    icon: <MindfulMomentIcon />,
  },
]

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <ClientOnly>
      <main
        className={`flex h-screen bg-mid-blue text-xs font-light text-zinc-300 ${poppins.className}`}
      >
        <article className="h-full w-52 bg-dark-blue flex-shrink-0">
          <Logo />
          <nav className=" ">
            {tabs.map(({ title, href, icon }) => (
              <div
                key={title}
                className={classNames(
                  "relative cursor-pointer rounded-md py-4 text-sm",
                  {
                    "bg-gradient-to-l from-base-blue font-normal":
                      pathname.slice(1) === href,
                    "text-gray-400 hover:text-gray-200":
                      pathname.slice(1) !== href,
                  }
                )}
              >
                {pathname.slice(1) === href && (
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full border border-indigo-500 p-0.5 ">
                    <div className="h-1 w-1 rounded-full bg-indigo-500"></div>
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
        <article className="flex-grow space-y-4 px-4 py-3">
          <section className="flex items-center justify-between border-b border-zinc-800 pb-2 font-medium">
            <h1 className="text-base">Overview</h1>
            <section className="flex items-center gap-x-2">
              <div className="rounded-sm bg-indigo-500 bg-opacity-[0.15] text-indigo-500 p-2">
                Upgrade
              </div>
              <div className="mr-2 rounded-sm bg-teal-500 bg-opacity-[0.15] p-2 text-teal-500">
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
          <section>{children}</section>
        </article>
      </main>
    </ClientOnly>
  );
};
