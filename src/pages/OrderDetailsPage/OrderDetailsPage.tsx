import { OrderDetailsCard } from '@components/OrderDetailsCard';
import { CancelOrderModal } from '@pages/OrderDetailsPage/components/CancelOrderModal';
import { useOrderDetailsPage } from '@pages/OrderDetailsPage/hooks/useOrderDetailsPage.ts';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';

import cls from './OrderDetailsPage.module.scss';

const OrderDetailsPage = () => {
  const { state, functions } = useOrderDetailsPage();

  if (state.loading.getOrdersId) {
    return <div>Загрузка</div>;
  }

  if (!state.orderDetailsItems) {
    return <div>Нет данных</div>;
  }

  return (
    <>
      <CancelOrderModal
        loading={state.loading.cancelOrder}
        error={state.error}
        open={state.openCancelOrderModal}
        onCloseModal={functions.onCloseCancelOrderModal}
        onCancelOrder={functions.onCancelOrder}
      />
      <div className={cls.order_details_page}>
        <Typography variant='typography24_semibold'>Детали</Typography>
        {state.orderDetailsItems.map((item) => (
          <OrderDetailsCard
            header={{ title: item.title, redirectTo: item.redirectTo }}
            body={item.body}
          />
        ))}
        <div className={cls.buttons}>
          <Button
            className={cls.button}
            onClick={functions.onOpenCancelOrderModal}
            variant='default_filled'
          >
            Отменить доставку
          </Button>
          <Button className={cls.button} onClick={functions.onCloseOrderDetailsPage}>
            Закрыть
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsPage;
