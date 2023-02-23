import classNames from "classnames";
import Link from "next/link";
import { Logo } from "./Logo/Logo";
import { AnalyticsIcon } from "./TabIcons/AnalyticsIcon";
import { JournalIcon } from "./TabIcons/JournalIcon";
import { MindfulMomentIcon } from "./TabIcons/MindfulMomentIcon";
import { OverviewIcon } from "./TabIcons/OverviewIcon";

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
];

interface Props {
  pathname: string;
}

export const AuthLayoutNavBar = ({ pathname }: Props) => {
  return (
    <article className="h-full w-64 flex-shrink-0 bg-mid-blue">
      <Logo />
      <nav>
        {tabs.map(({ title, href, icon }) => (
          <div
            key={title}
            className={classNames(
              "relative cursor-pointer rounded-md py-4 text-sm",
              {
                "bg-gradient-to-l from-base-blue font-normal":
                  pathname.slice(1) === href,
                "text-gray-400 hover:text-gray-200": pathname.slice(1) !== href,
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
  );
};
