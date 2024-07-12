import { useGetOrdersQuery } from '@api/hooks/useGetOrdersQuery.ts';
import { Typography } from '@ui/Typography';

import { OrdersListItem } from './components/OrdersListItem';

import cls from './OrdersListPage.module.scss';

const OrdersListPage = () => {
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
          <OrdersListItem key={index} order={order} />
        ))}
      </ul>
    </div>
  );
};

export default OrdersListPage;