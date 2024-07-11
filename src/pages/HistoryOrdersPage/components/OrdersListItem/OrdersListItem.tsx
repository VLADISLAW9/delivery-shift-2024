import { useNavigate } from 'react-router-dom';
import type { Order } from '@appTypes/order.ts';
import { Card } from '@ui/Card';
import { Link } from '@ui/Link';
import { Typography } from '@ui/Typography';

import { orderStatusColors, orderStatuses } from './conts/orderStatuses.ts';

import cls from './OrdersListItem.module.scss';

interface OrdersListItemProps {
  order: Order;
  orderNumber: number;
}

export const OrdersListItem = ({ order, orderNumber }: OrdersListItemProps) => {
  const navigate = useNavigate();

  return (
    <Card variant='outlined' component='li' className={cls.orders_list_item}>
      <div>
        <Typography className={cls.param_title} variant='typography12_regular'>
          Номер заказа
        </Typography>
        <Typography variant='typography16_regular'>{orderNumber}</Typography>
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
      <Link className={cls.more_link} to='/'>
        Подробнее
      </Link>
    </Card>
  );
};
