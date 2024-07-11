import type { ReactNode } from 'react';
import { useModal } from '@hooks/useModal';
import CloseIcon from '@icons/close.svg';
import { Button } from '@ui/Button';
import clsx from 'clsx';

import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, open, onClose }: ModalProps) => {
  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    open
  });

  if (!isMounted) {
    return null;
  }

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={clsx(
          cls.modal,
          {
            [cls.opened]: open,
            [cls.is_closing]: isClosing
          },
          className,
          'app_modal'
        )}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>
          <Button className={cls.close_button} onClick={close} variant='clear'>
            <CloseIcon className={cls.close_icon} />
          </Button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
