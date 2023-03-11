import classNames from "classnames";
import React from "react";

interface Props {
  moods: {
    id: number;
    name: string;
    sentiment: string;
    score: number;
  }[];
}

export const RadarChartMoodSelector = ({ moods }: Props) => {
  const nMoods = moods.length;

  return (
    <article className="absolute space-y-2 text-xs">
      <h1>
        Showing {moods.length} of {nMoods} emotions
      </h1>
      <section className="max-w-max space-y-2">
        {moods.map(({ id, sentiment, name }) => (
          <p
            key={id}
            className={classNames(
              "rounded-full border px-2 py-0.5 text-center",
              {
                "border-gray-600 text-lime-500": sentiment === "Positive",
                "border-gray-600 text-rose-500": sentiment === "Negative",
              }
            )}
          >
            {name}
          </p>
        ))}
      </section>
    </article>
  );
};
