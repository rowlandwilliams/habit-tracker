import { UiBox } from "../SHARED/UiBox/UiBox";
import { WeeklyProgressTable } from "./WeeklyProgressTable/WeeklyProgressTable";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface Props {
  habits: {
    name: string;
    daysCompleted: number;
    target: number;
  }[];
}

export const WeeklyProgress = ({ habits }: Props) => {
  return (
    <UiBox title="Sime tomooom">
      <WeeklyProgressTable days={days} habits={habits} />
    </UiBox>
  );
};
