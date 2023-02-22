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
      className="space-y-4 rounded-sm border border-transparent bg-base-blue p-4 hover:border-zinc-700"
    >
      <OverviewPieChartsCardTitleAndTag
        name={name}
        daysCompleted={daysCompleted}
        target={target}
      />
      <OverviewPieChartsCardPieChart
        progressPc={progressPc}
        targetPc={targetPc}
      />
      <div className="flex justify-between">
        <OverviewPieChartsCardTargetOrProgressSummary
          title="Target"
          nDays={target}
        />
        <OverviewPieChartsCardTargetOrProgressSummary
          title="Progress"
          nDays={daysCompleted}
          targetReached={targetReached}
          isProgress
        />
      </div>
    </Link>
  );
};
