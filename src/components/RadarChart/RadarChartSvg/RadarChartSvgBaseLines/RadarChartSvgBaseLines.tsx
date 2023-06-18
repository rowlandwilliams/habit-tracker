import React from "react";

interface Props {
  lineData: {
    day: number;
    diagonalCoords: {
      x1: number | undefined;
      x2: number | undefined;
      y1: number | undefined;
      y2: number | undefined;
    }[];
  }[];
}

export const RadarChartSvgBaseLines = ({ lineData }: Props) => {
  return (
    <g>
      {lineData.map(
        ({ day, diagonalCoords }) =>
          diagonalCoords[0]?.x1 && (
            <g key={`${day}-${diagonalCoords[0]?.x1}-group`}>
              <g>
                {diagonalCoords.map(
                  ({ x1, x2, y1, y2 }, i) =>
                    x1 &&
                    x2 &&
                    y1 &&
                    y2 && (
                      <line
                        x1={x1}
                        x2={x2}
                        y1={y1}
                        y2={y2}
                        key={`${day}-${x1}-${x2}-${y1}-${y2}-line-${i}`}
                        className="stroke-inactive"
                      ></line>
                    )
                )}
              </g>
            </g>
          )
      )}
    </g>
  );
};
