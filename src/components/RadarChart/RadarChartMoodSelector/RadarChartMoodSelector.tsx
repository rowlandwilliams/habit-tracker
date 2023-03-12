import type { Mood } from "@prisma/client";
import classNames from "classnames";
import React from "react";

interface Props {
  moods: Mood[];
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
        {moods.map(({ id, name, moodSentimentId }) => (
          <button
            key={id}
            className={classNames(
              "flex items-center gap-x-2 rounded-full border-gray-600  text-center",
              {
                "text-gray-400": activeMoods.includes(id),
                "text-gray-600": !activeMoods.includes(id),
              }
            )}
            onClick={() => handleMoodClick(id)}
          >
            <div
              className={classNames(
                "h-2 w-2 gap-x-2 rounded-full  border-gray-600  text-center",
                {
                  "bg-lime-500":
                    moodSentimentId === 1 && activeMoods.includes(id),
                  "bg-rose-500":
                    moodSentimentId === 2 && activeMoods.includes(id),
                  "bg-gray-600": !activeMoods.includes(id),
                }
              )}
            ></div>
            {name}
          </button>
        ))}
      </section>
    </article>
  );
};
