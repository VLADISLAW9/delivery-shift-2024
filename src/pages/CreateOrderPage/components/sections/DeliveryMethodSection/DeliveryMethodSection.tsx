import AirPlaneIcon from '@icons/air-plane.svg';
import BusIcon from '@icons/bus.svg';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';

import { convertWorkingDaysString } from '../../../utils/convertWorkingDaysString.ts';

import cls from './DeliveryMethodSection.module.scss';

export const DeliveryMethodSection = () => {
  const { options, setOption } = useCreateOrderStore();

  return (
    <section className={cls.delivery_method_section_wrapper}>
      <Typography variant='typography24_bold'>Способ доставки</Typography>
      <div className={cls.delivery_methods}>
        {options?.map((option) => {
          const Icon = option.type === 'EXPRESS' ? AirPlaneIcon : BusIcon;
          return (
            <Button
              onClick={() => setOption(option)}
              variant='clear'
              className={cls.delivery_method_button}
            >
              <div className={cls.button_icon_wrapper}>
                <Icon className={cls.button_icon} />
              </div>
              <div className={cls.button_text}>
                <Typography tag='h3' className={cls.title} variant='typography16_regular'>
                  {option.name}
                </Typography>
                <Typography tag='p' variant='typography24_bold'>
                  {option.price} ₽
                </Typography>
                <Typography tag='p' className={cls.days} variant='typography16_regular'>
                  {convertWorkingDaysString(option.days)}
                </Typography>
              </div>
            </Button>
          );
        })}
      </div>
    </section>
  );
};
