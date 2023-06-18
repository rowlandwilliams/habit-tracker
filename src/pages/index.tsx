import Head from "next/head";
import type { ReactElement } from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";
import { OverviewPieCharts } from "../components/OverviewPieCharts/OverviewPieCharts";
import { RadarChart } from "../components/RadarChart/RadarChart";
import { WeeklyProgress } from "../components/WeeklyProgress/WeeklyProgress";
import { api } from "../utils/api";

const habits = [
  { name: "Depressed", daysCompleted: 1, target: 5 },
  { name: "Anxious", daysCompleted: 6, target: 3 },
  { name: "Positive", daysCompleted: 6, target: 3 },
  { name: "Tired", daysCompleted: 3, target: 7 },
  { name: "Connect with friends", daysCompleted: 2, target: 1 },
  { name: "Code", daysCompleted: 5, target: 2 },
];

const Home = () => {
  // const habitQuery = api.habit.getAll.useQuery();
  // const { data, isLoading, isError } = habitQuery;

  // if (isLoading) return <div>loadingihih</div>;

  // console.log(data, isLoading, isError);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-full ">
        <RadarChart />
        <div className="space-y-6">
          {/* <OverviewPieCharts habits={habits} />
          <WeeklyProgress habits={habits} /> */}
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Home;
