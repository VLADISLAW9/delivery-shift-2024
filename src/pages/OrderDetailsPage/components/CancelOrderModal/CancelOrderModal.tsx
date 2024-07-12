import questionImage from '@images/question.png';
import { Button } from '@ui/Button';
import { Modal } from '@ui/Modal';
import { Typography } from '@ui/Typography';

import cls from './CancelOrderModal.module.scss';

interface CancelOrderModalProps {
  open: boolean;
  loading?: boolean;
  onCloseModal: () => void;
  onCancelOrder: () => void;
  error?: string;
}

export const CancelOrderModal = ({
  onCancelOrder,
  onCloseModal,
  open,
  error,
  loading
}: CancelOrderModalProps) => (
  <Modal className={cls.cancel_modal} open={open} onClose={onCloseModal}>
    <img className={cls.cancel_image} src={questionImage} />
    <Typography tag='h3' variant='typography20_semibold'>
      Отменить доставку?
    </Typography>
    {error && (
      <Typography className={cls.error_message} tag='p' variant='typography16_regular'>
        {error}
      </Typography>
    )}
    <Button
      loading={loading}
      variant='default_filled'
      className={cls.cancel_button}
      onClick={onCancelOrder}
    >
      Отменить
    </Button>
    <Button disabled={loading} className={cls.no_cancel_button} onClick={onCloseModal}>
      Не отменять
    </Button>
  </Modal>
);
