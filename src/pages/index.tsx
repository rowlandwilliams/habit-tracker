import classNames from "classnames";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PieChart } from "../components/PieChart/PieChart";

const habits = [
  { name: "Meditate", daysCompleted: 1, target: 5 },
  { name: "Go for a run", daysCompleted: 6, target: 3 },
  { name: "Drawing", daysCompleted: 3, target: 7 },
  { name: "Connect", daysCompleted: 2, target: 1 },
  { name: "Make bed", daysCompleted: 5, target: 2 },
  { name: "Plan life", daysCompleted: 1, target: 3 },
  { name: "Code", daysCompleted: 7, target: 4 },
  { name: "Eat Healthy", daysCompleted: 7, target: 4 },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="mx-auto grid max-w-[1000px] grid-cols-4 gap-4 rounded-sm border border-zinc-700  p-4">
        {habits.map(({ name, daysCompleted, target }) => (
          <Link
            href={`/habit/${name.toLowerCase()}`}
            key={name}
            className="flex items-center justify-between rounded-sm border border-transparent bg-zinc-800 p-4 hover:border-zinc-700"
          >
            <PieChart progress={(daysCompleted / 7) * 100} />
            <section className="space-y-2">
              <h1 className="flex items-center gap-x-2 text-sm font-medium">
                <Image src="/habit.svg" width={16} height={16} alt="habit" />
                {name}
              </h1>
              <p>
                <span className="font-semibold text-pink-600">
                  {daysCompleted}
                </span>{" "}
                out of 7
              </p>
              <p
                className={classNames(
                  "w-24 max-w-max rounded-2xl border px-2 py-0. text-center font-medium",
                  {
                    "border-emerald-500 bg-emerald-500 bg-opacity-20 text-emerald-500":
                      daysCompleted >= target,
                    "border-rose-500 bg-rose-500 bg-opacity-20 text-rose-500":
                      daysCompleted < target,
                  }
                )}
              >
                {daysCompleted >= target ? "COMPLETED" : "INCOMPLETE"}
              </p>
            </section>
          </Link>
        ))}
      </article>
    </>
  );
};

export default Home;
