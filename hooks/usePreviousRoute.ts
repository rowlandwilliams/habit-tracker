import { useEffect, useState } from "react";

export const usePreviousRoute = () => {
  const [previousRoute, setPreviousRoute] = useState<string | null>(null);

  useEffect(() => {
    setPreviousRoute(localStorage.getItem("previousRoute"));
  }, []);

  return previousRoute;
};
