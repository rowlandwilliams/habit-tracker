import classNames from "classnames";

const dim = 6;

interface Props {
  success: boolean;
}

export const WeeklyProgressTableDayStatusIcon = ({ success }: Props) => {
  return (
    <svg width={dim} height={dim}>
      <circle
        className={classNames({
          "fill-teal-500": success,
          "fill-rose-500": !success,
        })}
        r={dim / 2}
        cy={dim / 2}
        cx={dim / 2}
      ></circle>
    </svg>
  );
};
