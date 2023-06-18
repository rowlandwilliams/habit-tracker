import React from "react";
import { useComponentVisible } from "../../../../hooks/useComponentVisible";
import { Chevron } from "./Chevron/Chevron";

export const RadarChartScaleSelector = () => {
  const { ref, visible, setVisible } = useComponentVisible({
    initialIsVisible: false,
  });
  return (
    <div className="absolute right-0 " ref={ref}>
      <button
        className="relative flex items-center gap-x-2 rounded-md bg-gray-700 p-1 px-2"
        onClick={() => setVisible(!visible)}
      >
        <div className="from h-4 w-32 rounded-sm bg-gradient-to-r from-blue-800 via-pink-500 to-yellow-300" />
        <Chevron up={visible} />
      </button>
      {visible && (
        <div className="absolute top-full right-0 w-44 translate-y-1 rounded-md bg-gray-800 p-2">
          <button className="flex w-full items-center gap-x-2 rounded-md p-1 hover:bg-gray-700">
            <div className="h-4 w-full rounded-sm bg-gradient-to-r from-blue-800 via-pink-500 to-yellow-300" />
          </button>
          <button className="flex w-full items-center gap-x-2 rounded-md p-1 hover:bg-gray-700">
            <div className="h-4 w-full rounded-sm bg-gradient-to-r from-blue-800 via-teal-500 to-yellow-300" />
          </button>
          <button className="flex w-full items-center gap-x-2 rounded-md p-1 hover:bg-gray-700">
            <div className="h-4 w-full rounded-sm bg-gradient-to-r from-red-800 via-orange-500 to-yellow-300" />
          </button>
          <button className="flex w-full items-center gap-x-2 rounded-md p-1 hover:bg-gray-700">
            <div className="h-4 w-full rounded-sm bg-gradient-to-r from-blue-800 via-cyan-500 to-white" />
          </button>
          <button className="flex w-full items-center gap-x-2 rounded-md p-1 hover:bg-gray-700">
            <div className="h-4 w-full rounded-sm bg-gradient-to-r from-indigo-600 via-indigo-400 to-white" />
          </button>{" "}
          <button className="flex w-full items-center gap-x-2 rounded-md p-1 hover:bg-gray-700">
            <div className=" h-4 w-full rounded-sm bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300 " />
          </button>
        </div>
      )}
    </div>
  );
};
