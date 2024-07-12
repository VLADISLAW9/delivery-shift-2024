import { useNavigate } from 'react-router-dom';
import type { Order } from '@appTypes/order.ts';
import { getRouteOrderDetails } from '@consts/router.ts';
import {
  orderStatusColors,
  orderStatuses
} from '@pages/OrdersListPage/components/OrdersListItem/conts/orderStatuses.ts';
import { Card } from '@ui/Card';
import { Link } from '@ui/Link';
import { Typography } from '@ui/Typography';

import cls from './OrdersListItem.module.scss';

interface OrdersListItemProps {
  order: Order;
}

export const OrdersListItem = ({ order }: OrdersListItemProps) => {
  const navigate = useNavigate();

  return (
    <Card variant='outlined' component='li' className={cls.orders_list_item}>
      <div>
        <Typography className={cls.param_title} variant='typography12_regular'>
          Номер заказа
        </Typography>
        <Typography variant='typography16_regular'>{order._id}</Typography>
      </div>
      <div>
        <Typography className={cls.param_title} variant='typography12_regular'>
          Статус
        </Typography>
        <div className={cls.status_wrapper}>
          <span className={cls[orderStatusColors[order.status]]} />
          <Typography variant='typography16_regular'>{orderStatuses[order.status]}</Typography>
        </div>
      </div>
      <div>
        <Typography className={cls.param_title} variant='typography12_regular'>
          Адрес доставки
        </Typography>
        <Typography variant='typography16_regular'>
          Россия, г.{order.senderPoint.name}, ул.{order.senderAddress.street}, д.
          {order.senderAddress.house}
        </Typography>
      </div>
      <div>
        <Typography className={cls.param_title} variant='typography12_regular'>
          Тип доставки
        </Typography>
        <Typography variant='typography16_regular'>
          {order.option?.type ? order.option.type : 'Не известно'}
        </Typography>
      </div>
      <Link className={cls.more_link} to={getRouteOrderDetails(order._id)}>
        Подробнее
      </Link>
    </Card>
  );
};
