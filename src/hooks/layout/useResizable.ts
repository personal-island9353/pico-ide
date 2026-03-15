import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export type ResizableProps = {
  initialDimension?: number;
  minDimension?: number;
  maxDimension?: number;
  orientation: "horizontal" | "vertical";
  side: "left" | "right" | "top" | "bottom";
};

function useResizable({
  initialDimension,
  minDimension = 100,
  maxDimension,
  orientation,
  side,
}: ResizableProps) {
  const [dimension, setDimension] = useState<number | undefined>(
    initialDimension
  );
  const isResizing = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (elementRef.current && initialDimension === undefined) {
      if (orientation === "horizontal") {
        setDimension(elementRef.current.offsetWidth);
      } else {
        setDimension(elementRef.current.offsetHeight);
      }
    }
  }, [orientation, initialDimension]);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (!isResizing.current) return;

      let newDimension: number;
      const maxPossible =
        orientation === "horizontal" ? window.innerWidth : window.innerHeight;
      const limit = maxDimension ?? maxPossible / 2;

      if (orientation === "horizontal") {
        if (side === "left") {
          newDimension = e.clientX;
        } else {
          newDimension = window.innerWidth - e.clientX;
        }
      } else {
        if (side === "top") {
          newDimension = e.clientY;
        } else {
          newDimension = window.innerHeight - e.clientY;
        }
      }

      setDimension(Math.max(minDimension, Math.min(newDimension, limit)));
    },
    [orientation, side, minDimension, maxDimension]
  );

  const startResizing = useCallback(() => {
    isResizing.current = true;
    document.body.style.cursor =
      orientation === "horizontal" ? "col-resize" : "row-resize";
    document.body.style.userSelect = "none";
  }, [orientation]);

  const stopResizing = useCallback(() => {
    isResizing.current = false;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return { dimension, startResizing, elementRef };
}

export default useResizable;