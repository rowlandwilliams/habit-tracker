import { type NextPage } from "next";
import Head from "next/head";
import { PieChart } from "../components/Pie/Pie";

const habits = [
  { name: "Meditate", daysCompleted: 1, progress: 80 },
  { name: "Go for a run", daysCompleted: 2, progress: 23 },
  { name: "Drawing", daysCompleted: 3, progress: 1 },
  { name: "Connect", daysCompleted: 4, progress: 8 },
  { name: "Make bed", daysCompleted: 5, progress: 40 },
  { name: "Plan life", daysCompleted: 6, progress: 96 },
  { name: "Code", daysCompleted: 7, progress: 74 },
  { name: "Eat Healthy", daysCompleted: 7, progress: 32 },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-[#10015c] p-8 text-sm text-white">
        <article className="mx-auto grid max-w-[1000px] grid-cols-4 gap-4 rounded-sm border border-indigo-600 bg-[#12006b] p-4">
          {habits.map(({ name, daysCompleted, progress }) => (
            <section
              key={name}
              className="flex justify-between rounded-sm bg-indigo-900 p-4"
            >
              <PieChart progress={progress} />
              <section>
                <h1 className="text-base">{name}:</h1>
                <p>
                  <span className="font-medium text-pink-600">
                    {daysCompleted}
                  </span>{" "}
                  out of <span className="font-medium text-pink-600">7</span>
                </p>
              </section>
            </section>
          ))}
        </article>
      </main>
    </>
  );
};

export default Home;
