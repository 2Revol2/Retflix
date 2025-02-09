import { useEffect, useState } from "react";
import _debounce from "lodash.debounce";

// true - mobile site version. false - desktop site version
export const useMobile = (breakpoint: number) => {
  const [width, setWidth] = useState(window.innerWidth);
  const debounce = _debounce(() => setWidth(window.innerWidth), 100);

  useEffect(() => {
    window.addEventListener("resize", debounce);

    return () => window.removeEventListener("resize", debounce);
  }, []);

  return breakpoint >= width;
};
