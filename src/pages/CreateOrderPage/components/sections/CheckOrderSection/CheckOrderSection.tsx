import { OrderDetailsCard } from '@components/OrderDetailsCard';
import { SuccessModal } from '@pages/CreateOrderPage/components/SuccessModal/SuccessModal.tsx';
import { convertWorkingDaysString } from '@pages/CreateOrderPage/utils/convertWorkingDaysString.ts';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';

import { useCheckOrderSection } from './hooks/useCheckOrderSection';

import cls from './CheckOrderSection.module.scss';

export const CheckOrderSection = () => {
  const { state, functions } = useCheckOrderSection();

  return (
    <>
      <SuccessModal open={state.openModal} onClose={functions.onCloseModal} />
      <div className={cls.check_order_section}>
        <Typography variant='typography24_bold'>Проверка данных заказа</Typography>
        <ul className={cls.order}>
          {state.orderDetailsItems.map((item) => (
            <OrderDetailsCard
              header={{ title: item.title, redirectTo: item.redirectTo }}
              body={item.body}
            />
          ))}
        </ul>
        <div className={cls.options}>
          <Typography tag='h3' variant='typography20_bold'>
            Итого: {state.option?.price} ₽
          </Typography>
          <Typography tag='p' variant='typography16_regular'>
            Тариф: {state.option?.name}
          </Typography>
          <Typography tag='p' variant='typography16_regular'>
            Срок: {convertWorkingDaysString(state.option?.days)}
          </Typography>
        </div>
        {state.error && (
          <Typography tag='p' variant='typography16_regular' className={cls.error}>
            {state.error}
          </Typography>
        )}
        <div className={cls.buttons}>
          <Button
            disabled={state.loading}
            onClick={functions.onComeback}
            variant='default_filled'
            className={cls.button}
          >
            Назад
          </Button>
          <Button
            loading={state.loading}
            onClick={functions.onSubmitOrderData}
            className={cls.button}
          >
            Отправить
          </Button>
        </div>
      </div>
    </>
  );
};
