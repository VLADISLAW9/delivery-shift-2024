import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';

import { OrderDataCard } from './components/OrderDataCard';
import { useCheckOrderSection } from './hooks/useCheckOrderSection';
import { getOrderDataItems } from './selectors/getOrderDataItems.ts';

import cls from './CheckOrderSection.module.scss';

export const CheckOrderSection = () => {
  const { state } = useCheckOrderSection();

  return (
    <div className={cls.check_order_section}>
      <Typography variant='typography24_bold'>Проверка данных заказа</Typography>
      <ul className={cls.order}>
        {state.orderDataItems.map((item) => (
          <OrderDataCard
            header={{ title: item.title, redirectTo: item.redirectTo }}
            body={item.body}
          />
        ))}
      </ul>
      <div className={cls.buttons}>
        <Button variant='default_filled' className={cls.button}>
          Назад
        </Button>
        <Button className={cls.button} type='submit'>
          Отправить
        </Button>
      </div>
    </div>
  );
};
