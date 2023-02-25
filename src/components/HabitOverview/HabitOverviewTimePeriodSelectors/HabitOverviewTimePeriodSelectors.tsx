import { SelectorButton } from "../../SHARED/SelectorButton/SelectorButton";

const timeOptions = [
  { label: "1W", nDays: 7 },
  { label: "2W", nDays: 14 },
  { label: "1M", nDays: 30 },
  { label: "2M", nDays: 60 },
];

interface Props {
  activeNDays: number;
  handleTimeOptionClick: (nDays: number) => void;
}

export const HabitOverviewTimePeriodSelectors = ({
  activeNDays,
  handleTimeOptionClick,
}: Props) => {
  return (
    <div className="space-x-1">
      {timeOptions.map(({ label, nDays }) => (
        <SelectorButton
          label={label}
          option={nDays}
          handleClick={handleTimeOptionClick}
          activeOption={activeNDays}
          key={label}
        />
      ))}
    </div>
  );
};
