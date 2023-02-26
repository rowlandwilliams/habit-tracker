import Head from "next/head";
import type { ReactElement } from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";
import { OverviewPieCharts } from "../components/OverviewPieCharts/OverviewPieCharts";
import { RadarChart } from "../components/RadarChart/RadarChart";
import { WeeklyProgress } from "../components/WeeklyProgress/WeeklyProgress";
import { api } from "../utils/api";

const habits = [
  { name: "Meditate", daysCompleted: 1, target: 5 },
  { name: "Surf", daysCompleted: 6, target: 3 },
  { name: "Go for a run", daysCompleted: 6, target: 3 },
  { name: "Drawing", daysCompleted: 3, target: 7 },
  { name: "Connect with friends", daysCompleted: 2, target: 1 },
  { name: "Code", daysCompleted: 5, target: 2 },
  { name: "Send it", daysCompleted: 3, target: 7 },
  { name: "Make bed", daysCompleted: 5, target: 2 },
  { name: "No Phone", daysCompleted: 3, target: 7 },
];

const numbers = [1, 2, 3];

const doubleNumbers = numbers.map((number) => number * 2);

const Home = () => {
  const habitQuery = api.habit.getAll.useQuery();

  if (!habitQuery.data) return <div>loading</div>;

  const { data } = habitQuery;

  console.log(doubleNumbers);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-2">
        <RadarChart habits={habits} />
        <div className="space-y-6">
          <OverviewPieCharts habits={habits} />
          <WeeklyProgress habits={habits} />
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Home;
