import { useState } from "react";
import { useResponsiveGraphDims } from "../../../hooks/useResponsiveGraphDims";
import { api } from "../../utils/api";
import { RadarChartMoodSelector } from "./RadarChartMoodSelector/RadarChartMoodSelector";
import { RadarChartSvg } from "./RadarChartSvg/RadarChartSvg";

export const RadarChart = () => {
  const { isLoading, isError, data, error } = api.moodData.getAll.useQuery();
  const { ref, graphWidth, graphHeight } = useResponsiveGraphDims();
  const graphDim = Math.min(graphWidth, graphHeight);

  const { moods } = (data && data[0]) || { moods: [] };
  const nVertices = moods.length;
  const [activeMoods, setActiveMoods] = useState(moods.map(({ id }) => id));

  const handleMoodClick = (moodId: number) =>
    activeMoods.includes(moodId)
      ? setActiveMoods(activeMoods.filter((id) => id !== moodId))
      : setActiveMoods([...activeMoods, moodId]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error! ${error.message}</div>;

  return (
    <article className="flex w-full flex-col">
      {moods && activeMoods && (
        <RadarChartMoodSelector
          moods={moods}
          activeMoods={activeMoods}
          handleMoodClick={handleMoodClick}
        />
      )}
      <section ref={ref} className="w-full flex-grow">
        <RadarChartSvg
          data={data}
          graphDim={graphDim}
          moods={moods}
          nVertices={nVertices}
        />
      </section>
    </article>
  );
};
