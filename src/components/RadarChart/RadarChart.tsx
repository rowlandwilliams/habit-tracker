import { useEffect, useState } from "react";
import { useResponsiveGraphDims } from "../../../hooks/useResponsiveGraphDims";
import { api } from "../../utils/api";
import { RadarChartMoodSelector } from "./RadarChartMoodSelector/RadarChartMoodSelector";
import { RadarChartScaleSelector } from "./RadarChartScaleSelector/RadarChartScaleSelector";
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

  useEffect(() => {
    if (moodData) {
      setActiveMoods(moodData?.map(({ id }) => id));
    }
  }, [moodData]);

  return (
    <article className="flex w-full flex-col relative">
      {moodData && (
        <RadarChartMoodSelector
          moods={moodData}
          activeMoods={activeMoods}
          handleMoodClick={handleMoodClick}
        />
      )}
      {moodData && (
        <section ref={ref} className="w-full flex-grow">
          <RadarChartSvg
            activeMoods={activeMoods}
            graphDim={graphDim}
            moods={moodData}
          />
        </section>
      )}
      <RadarChartScaleSelector />
    </article>
  );
};
