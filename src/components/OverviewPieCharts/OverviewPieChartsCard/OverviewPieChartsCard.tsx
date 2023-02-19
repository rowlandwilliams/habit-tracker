import Link from "next/link";
import { OverviewPieChartsCardPieChart } from "./OverviewPieChartsCardPieChart/OverviewPieChartsCardPieChart";
import { OverviewPieChartsCardTargetOrProgressSummary } from "./OverviewPieChartsCardTargetOrProgressSummary/OverviewPieChartsCardTargetOrProgressSummary";
import { OverviewPieChartsCardTitleAndTag } from "./OverviewPieChartsCardTitleAndTag/OverviewPieChartsCardTitleAndTag";

interface Props {
  name: string;
  daysCompleted: number;
  target: number;
}

export const OverviewPieChartsCard = ({
  name,
  daysCompleted,
  target,
}: Props) => {
  const progressPc = (daysCompleted / 7) * 100;
  const targetPc = (target / 7) * 100;
  const targetReached = daysCompleted >= target;
  return (
    <Link
      href={`/habit/${name.toLowerCase()}`}
      key={name}
      className="space-y-4 rounded-sm border border-transparent bg-zinc-800 p-4 hover:border-zinc-700"
    >
      <div className="flex justify-between">
        <OverviewPieChartsCardPieChart
          progressPc={progressPc}
          targetPc={targetPc}
        />
        <OverviewPieChartsCardTitleAndTag
          name={name}
          daysCompleted={daysCompleted}
          target={target}
        />
      </div>
      <div className="flex justify-between">
        <OverviewPieChartsCardTargetOrProgressSummary nDays={target} />
        <OverviewPieChartsCardTargetOrProgressSummary
          nDays={daysCompleted}
          targetReached={targetReached}
          isProgress
        />
      </div>
    </Link>
  );
};
