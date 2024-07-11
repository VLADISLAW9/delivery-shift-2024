type StatusKey = 0 | 1 | 2 | 3 | 4;

export const orderStatuses: { [key: StatusKey]: string } = {
  0: 'Заказ создан',
  1: 'Заказ принят',
  2: 'Заказ готовится',
  3: 'Заказ доставлен',
  4: 'Заказ отменен'
};

export const orderStatusColors: { [key: StatusKey]: string } = {
  0: 'status_create',
  1: 'status_get',
  2: 'status_pending',
  3: 'status_success',
  4: 'status_cancel'
};
