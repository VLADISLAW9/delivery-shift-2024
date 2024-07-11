import type { MutableRefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
  onClose?: () => void;
  open?: boolean;
  animationDelay: number;
}

export function useModal({ animationDelay, open, onClose }: UseModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (open) {
      setIsMounted(true);
    }
  }, [open]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onKeyDown]);

  return {
    isClosing,
    isMounted,
    close
  };
}
