import classNames from "classnames";

interface Props {
  up: boolean;
  marginLeft?: boolean;
}

export const Chevron = ({ up, marginLeft = false }: Props) => (
  <svg
    className={classNames(" fill-current transition-all duration-75", {
      "rotate-180": up,
      "ml-2 -mr-1": marginLeft,
    })}
    width="11"
    height="7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293 1.293a1 1 0 0 1 1.414 0L5 4.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
    />
  </svg>
);
