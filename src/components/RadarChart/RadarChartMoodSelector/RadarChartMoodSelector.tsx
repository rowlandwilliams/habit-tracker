import classNames from "classnames";
import React from "react";

interface Props {
  moods: {
    id: number;
    name: string;
    sentiment: string;
    score: number;
  }[];
  activeMoods: number[];
  handleMoodClick: (moodId: number) => void;
}

export const RadarChartMoodSelector = ({
  moods,
  activeMoods,
  handleMoodClick,
}: Props) => {
  const nMoods = moods.length;

  return (
    <article className="absolute space-y-2 text-xs">
      <h1 className="font-medium">
        Showing {moods.length} of {nMoods} emotions
      </h1>
      <section className="max-w-max space-y-2">
        {moods.map(({ id, sentiment, name }) => (
          <button
            key={id}
            className={classNames(
              "block  rounded-full border-gray-600  text-center",
              {
                "text-lime-500":
                  sentiment === "Positive" && activeMoods.includes(id),
                "text-rose-500":
                  sentiment === "Negative" && activeMoods.includes(id),
                "text-gray-600": !activeMoods.includes(id),
              }
            )}
            onClick={() => handleMoodClick(id)}
          >
            {name}
          </button>
        ))}
      </section>
    </article>
  );
};
