import { useNavigate } from 'react-router-dom';
import successImage from '@images/success.png';
import { Button } from '@ui/Button';
import { Modal } from '@ui/Modal';
import { Typography } from '@ui/Typography';

import cls from './SuccessModal.module.scss';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ onClose, open }: SuccessModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal className={cls.success_modal} open={open} onClose={onClose}>
      <img alt='success' className={cls.success_image} src={successImage} />
      <Typography tag='h3' variant='typography20_semibold'>
        Заявка отправлена
      </Typography>
      <Typography variant='typography16_regular'>
        Вы можете оплатить ваш заказ <br /> в разделе «Профиль»
      </Typography>
      <Button className={cls.redirect_button} onClick={() => navigate('/profile')}>
        Посмотреть статус
      </Button>
    </Modal>
  );
};
