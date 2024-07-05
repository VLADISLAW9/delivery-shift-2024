import { useEffect, useRef, useState } from 'react';

interface UseCountDownParams {
  countStart: number;
  interval?: number;
  enabled?: boolean;
}

export const useCountDown = ({ interval = 1000, countStart }: UseCountDownParams) => {
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const [count, setCount] = useState(countStart);

  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (!enabled) return;
    intervalRef.current = setInterval(() => {
      setCount((count) => count - 1);
    }, interval);

    return () => clearInterval(intervalRef.current);
  }, [enabled]);

  useEffect(() => {
    if (count === 0) {
      setEnabled(false);
      clearInterval(intervalRef.current);
    }
  }, [count]);

  const startCountDown = (time?: number) => {
    setCount(time ?? countStart);
    setEnabled(true);
  };

  return [count, { startCountDown }] as const;
};
