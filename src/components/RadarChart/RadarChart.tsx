import { useEffect, useState } from "react";
import { useResponsiveGraphDims } from "../../../hooks/useResponsiveGraphDims";
import { api } from "../../utils/api";
import { RadarChartMoodSelector } from "./RadarChartMoodSelector/RadarChartMoodSelector";
import { RadarChartSvg } from "./RadarChartSvg/RadarChartSvg";

export const RadarChart = () => {
  const { ref, graphWidth, graphHeight } = useResponsiveGraphDims();
  const graphDim = Math.min(graphWidth, graphHeight);

  const [activeMoods, setActiveMoods] = useState<number[]>([1, 2, 3, 4]);

  const handleMoodClick = (moodId: number) =>
    activeMoods.includes(moodId)
      ? setActiveMoods(activeMoods.filter((id) => id !== moodId))
      : setActiveMoods([...activeMoods, moodId]);

  const { data: moodData } = api.mood.getAll.useQuery();

  const { isLoading, isError, data, error } =
    api.moodData.getAll.useQuery(activeMoods);

  const nVertices = moodData?.length;

  useEffect(() => {
    if (moodData) {
      setActiveMoods(moodData?.map(({ id }) => id));
    }
  }, [moodData]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error! ${error.message}</div>;

  return (
    <article className="flex w-full flex-col">
      {moodData && activeMoods && (
        <RadarChartMoodSelector
          moods={moodData}
          activeMoods={activeMoods}
          handleMoodClick={handleMoodClick}
        />
      )}
      {moodData && nVertices && (
        <section ref={ref} className="w-full flex-grow">
          <RadarChartSvg
            data={data}
            graphDim={graphDim}
            moods={moodData}
            nVertices={nVertices}
          />
        </section>
      )}
    </article>
  );
};
