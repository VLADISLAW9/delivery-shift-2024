import { useGetOrdersQuery } from '@api/hooks/useGetOrdersQuery.ts';
import { Typography } from '@ui/Typography';

import { OrdersListItem } from './components/OrdersListItem';

import cls from './HistoryOrdersPage.module.scss';

const HistoryOrdersPage = () => {
  const getOrdersQuery = useGetOrdersQuery();

  if (getOrdersQuery.isLoading) {
    return <div>Загрузка...</div>;
  }
  if (!getOrdersQuery.data && !getOrdersQuery.data?.status) {
    return <div>Произошла ошибка</div>;
  }

  return (
    <div className={cls.history_orders_page}>
      <Typography variant='typography24_bold'>История</Typography>
      <ul className={cls.orders_list}>
        {getOrdersQuery.data.data.orders.map((order, index) => (
          <OrdersListItem key={index} order={order} orderNumber={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default HistoryOrdersPage;
