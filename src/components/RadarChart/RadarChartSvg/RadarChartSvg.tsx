import { getDiagonalLineData } from "../utils";
import { getHabitCoordinates } from "../utils/habitCoordinates";
import { RadarChartSvgBaseLines } from "./RadarChartSvgBaseLines/RadarChartSvgBaseLines";
import { RadarChartSvgLabels } from "./RadarChartSvgLabels/RadarChartSvgLabels";
import { RadarChartSvgPaths } from "./RadarChartSvgPaths/RadarChartSvgPaths";

const padding = 120;
const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nLevels = levels.length;
const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const minDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

interface Props {
  graphDim: number;
  nVertices: number;
  data: {
    date: string;
    moods: {
      id: number;
      name: string;
      sentiment: string;
      score: number;
    }[];
  }[];
  moods:
    | {
        id: number;
        name: string;
        sentiment: string;
        score: number;
      }[]
    | never[];
}

export const RadarChartSvg = ({ graphDim, nVertices, data, moods }: Props) => {
  const visDim = graphDim - padding;
  const lineData = getDiagonalLineData(levels, nVertices, visDim);
  const pathCoords = getHabitCoordinates({
    moodData: data,
    nVertices,
    nLevels,
    graphDim: visDim,
  });
  const dates = data.map((day) => new Date(day.date));
  return (
    <svg width={graphDim} height={graphDim} className="mx-auto">
      <g transform={`translate(${padding / 2}, ${padding / 2})`}>
        <RadarChartSvgBaseLines lineData={lineData} />
        <RadarChartSvgPaths
          maxDate={maxDate(dates)}
          minDate={minDate(dates)}
          pathCoords={pathCoords}
        />
        <RadarChartSvgLabels
          moods={moods}
          nLevels={nLevels}
          nVertices={nVertices}
          visDim={visDim}
        />
      </g>
    </svg>
  );
};
