import Link from "next/link";
import { OverviewPieChartsCardPieChart } from "./OverviewPieChartsCardPieChart/OverviewPieChartsCardPieChart";
import { OverviewPieChartsCardTargetOrProgressSummary } from "./OverviewPieChartsCardTargetOrProgressSummary/OverviewPieChartsCardTargetOrProgressSummary";
import { OverviewPieChartsCardTitleAndTag } from "./OverviewPieChartsCardTitleAndTag/OverviewPieChartsCardTitleAndTag";

interface Props {
  habitId: number;
  habitName: string;
  daysCompleted: number;
  target: number;
}

export const OverviewPieChartsCard = ({
  habitId,
  habitName,
  daysCompleted,
  target,
}: Props) => {
  const progressPc = (daysCompleted / 7) * 100;
  const targetPc = (target / 7) * 100;
  const targetReached = daysCompleted >= target;
  const habitNameLowerCase = habitName.toLowerCase();
  const href = `/habit/${habitNameLowerCase.toLowerCase()}`;
  return (
    <Link
      href={{
        pathname: href,
        query: { habitId, habitName },
      }}
      as={href}
      key={habitNameLowerCase}
      className="w-80 flex-shrink-0 space-y-4 rounded-sm border border-base-blue  p-4 hover:border-purple"
    >
        <OverviewPieChartsCardTitleAndTag
          name={habitName}
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
