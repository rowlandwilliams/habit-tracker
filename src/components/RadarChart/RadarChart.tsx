import { useResponsiveGraphDims } from "../../../hooks/useResponsiveGraphDims";
import { api } from "../../utils/api";
import { RadarChartMoodSelector } from "./RadarChartMoodSelector/RadarChartMoodSelector";
import { RadarChartSvg } from "./RadarChartSvg/RadarChartSvg";

export const RadarChart = () => {
  const { isLoading, isError, data, error } = api.moodData.getAll.useQuery();
  const { ref, graphWidth, graphHeight } = useResponsiveGraphDims();
  const graphDim = Math.min(graphWidth, graphHeight);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error! ${error.message}</div>;

  const { moods } = data[0] || { moods: [] };
  const nVertices = moods.length;

  return (
    <article className="flex w-full flex-col">
      {moods && <RadarChartMoodSelector moods={moods} />}
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
