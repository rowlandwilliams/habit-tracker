import classNames from "classnames";

interface Props {
  nDays: number;
  isProgress?: boolean;
  targetReached?: boolean;
}

export const OverviewPieChartsCardTargetOrProgressSummary = ({
  nDays,
  isProgress = false,
  targetReached = false,
}: Props) => {
  return (
    <p className="space-y-1">
      <h1 className="font-normal">Target</h1>
      <div>
        <span
          className={classNames("font-semibold", {
            "text-indigo-500": !isProgress,
            "text-teal-500": isProgress && targetReached,
            "text-rose-500": isProgress && !targetReached,
          })}
        >
          {nDays}
        </span>{" "}
        out of 7
      </div>
    </p>
  );
};
