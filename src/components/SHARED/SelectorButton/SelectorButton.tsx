import classNames from "classnames";

interface Props<T> {
  label: string;
  option: T;
  activeOption: T;
  handleClick: (optiion: T) => void;
}

export const SelectorButton = <T extends number>({
  label,
  option,
  activeOption,
  handleClick,
}: Props<T>) => {
  const active = option === activeOption;
  return (
    <button
      onClick={() => handleClick(option)}
      key={label}
      className={classNames(
        "rounded-sm bg-opacity-20 p-1 text-xs font-medium",
        {
          "bg-indigo-500 text-indigo-500": active,
          "bg-gray-600 text-gray-600 hover:text-purple": !active,
        }
      )}
    >
      {label}
    </button>
  );
};
