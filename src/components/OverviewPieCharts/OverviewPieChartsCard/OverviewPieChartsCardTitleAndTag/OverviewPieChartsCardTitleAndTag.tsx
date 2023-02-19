import classNames from "classnames";
import Image from "next/image";

interface Props {
  name: string;
  daysCompleted: number;
  target: number;
}

export const OverviewPieChartsCardTitleAndTag = ({
  name,
  daysCompleted,
  target,
}: Props) => {
  const completed = daysCompleted >= target;
  return (
    <section className="flex flex-col items-end space-y-2">
      <h1 className="flex items-center gap-x-2 text-sm font-medium">
        <Image src="/habit.svg" width={16} height={16} alt="habit" />
        {name}
      </h1>
      <p
        className={classNames(
          "w-24 max-w-max rounded-2xl border px-2 text-center font-medium",
          {
            "border-teal-500 text-teal-500": completed,
            "border-rose-500 text-rose-500": !completed,
          }
        )}
      >
        {daysCompleted >= target ? "COMPLETED" : "INCOMPLETE"}
      </p>
    </section>
  );
};