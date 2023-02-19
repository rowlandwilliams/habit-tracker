import { type NextPage } from "next";
import Head from "next/head";
import { OverviewPieCharts } from "../components/OverviewPieCharts/OverviewPieCharts";
import { WeeklyProgress } from "../components/WeeklyProgress/WeeklyProgress";

const habits = [
  { name: "Meditate", daysCompleted: 1, target: 5 },
  { name: "Go for a run", daysCompleted: 6, target: 3 },
  { name: "Drawing", daysCompleted: 3, target: 7 },
  { name: "Connect with friends", daysCompleted: 2, target: 1 },
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
      <div className="space-y-4">
        <OverviewPieCharts habits={habits} />
        <WeeklyProgress habits={habits} />
      </div>
    </>
  );
};

export default Home;
